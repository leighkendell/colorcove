import Client, { Product, Cart } from 'shopify-buy';
import { useState, useEffect } from 'react';
import useStore from './use-store';
import { isBrowser } from '../utils/helpers';

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN as string,
  domain: 'colorcove.myshopify.com',
});

/** Returns the shopify client */
export const useShopifyClient = () => {
  if (client && isBrowser) {
    return client;
  }
};

/** Sets up the initial shopify checkout */
export const useShopifyCheckout = () => {
  const checkoutId = useStore(state => state.checkoutId);
  const setCheckoutId = useStore(state => state.setCheckoutId);
  const setCheckout = useStore(state => state.setCheckout);

  useEffect(() => {
    let didCancel = false;

    if (checkoutId) {
      client.checkout
        .fetch(checkoutId)
        .then(checkout => {
          if (!didCancel) {
            setCheckout(checkout);
          }
        })
        .catch(error => {
          console.error(error);
          if (!didCancel) {
            setCheckoutId('');
          }
        });
    } else {
      client.checkout
        .create()
        .then(checkout => {
          if (!didCancel) {
            setCheckoutId(checkout.id);
            setCheckout(checkout);
          }
        })
        .catch(error => console.error(error));
    }

    return () => {
      didCancel = true;
    };
  }, [setCheckoutId, checkoutId, setCheckout]);
};

/** Returns a shopify Product from the API */
export const useShopifyProduct = (id: string) => {
  const [product, setProduct] = useState<Product>();

  // Fetch from shopify API and update state
  useEffect(() => {
    let didCancel = false;

    client.product
      .fetch(id)
      .then(productData => {
        if (!didCancel) {
          setProduct(productData);
        }
      })
      .catch(error => {
        console.error(error);
      });

    return () => {
      didCancel = true;
    };
  }, [id]);

  return product;
};

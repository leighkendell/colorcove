import Client, { Product } from 'shopify-buy';
import { useState, useEffect } from 'react';
import useStore from './use-store';

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN as string,
  domain: 'colorcove.myshopify.com',
});

/** Returns the shopify client */
export const useShopifyClient = () => client;

/** Sets up the initial shopify checkout */
export const useShopifyCheckout = () => {
  const checkoutId = useStore(state => state.checkoutId);
  const setCheckoutId = useStore(state => state.setCheckoutId);
  const setCheckout = useStore(state => state.setCheckout);

  useEffect(() => {
    let didCancel = false;

    const hasInvalidLineItems: (checkout: any) => boolean = checkout =>
      checkout.lineItems.some((lineItem: any) => lineItem.variant === null);

    // Create a new checkout
    const createCheckout = async () => {
      try {
        const checkout = await client.checkout.create();
        if (!didCancel) {
          setCheckoutId(checkout.id);
          setCheckout(checkout);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch an existing checkout
    const getCheckout = async (checkoutId: string) => {
      try {
        const checkout = await client.checkout.fetch(checkoutId);

        // Prevent any state updates if the component was unmounted
        if (didCancel) {
          return;
        }

        // TODO: Clean up types once @types/shopify-buy are updated
        if ((checkout as any).completedAt || hasInvalidLineItems(checkout)) {
          // Create a new checkout if this one has already been completed or it contains invalid line items
          createCheckout();
        } else {
          // Set the checkout
          setCheckout(checkout);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch or create a new checkout
    if (checkoutId && typeof checkoutId === 'string') {
      getCheckout(checkoutId);
    } else {
      createCheckout();
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

    const getProduct = async () => {
      try {
        const product = await client.product.fetch(id);

        if (!didCancel) {
          setProduct(product);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();

    return () => {
      didCancel = true;
    };
  }, [id]);

  return product;
};

import React from 'react';
import { useShopifyCheckout, useShopifyClient } from '../hooks/shopify';
import CartItem from './cart-item';
import Cart from './cart';
import useStore from '../hooks/use-store';

const ShopifyCart: React.FC = () => {
  const setCheckout = useStore(state => state.setCheckout);
  const checkoutId = useStore(state => state.checkoutId);
  const checkout = useStore(state => state.checkout);
  const closeCart = useStore(state => state.closeCart);
  const cartIsOpen = useStore(state => state.cartIsOpen);

  // Setup shopify checkout
  useShopifyCheckout();
  const client = useShopifyClient();

  // TODO: Clean up types once @types/shopify-buy are updated
  const handleRemove = (variantId: string | number) => {
    if (client && checkoutId) {
      (client as any).checkout
        .removeLineItems(checkoutId, [variantId])
        .then((checkout: any) => {
          setCheckout(checkout);
        });
    }
  };

  // TODO: Clean up types once @types/shopify-buy are updated
  const handleCheckout = () => {
    if (checkout) {
      window.location.href = (checkout as any).webUrl;
    }
  };

  // TODO: Clean up types once @types/shopify-buy are updated
  const getThumbnail = (image: any) => {
    if (client && image) {
      return (client as any).image.helpers.imageForSize(image, {
        maxWidth: 192,
        maxHeight: 192,
      });
    }
    return image;
  };

  return (
    <>
      <Cart
        isOpen={cartIsOpen}
        onClose={closeCart}
        subtotal={(checkout && checkout.subtotalPrice) || ''}
        onCheckout={handleCheckout}
      >
        {checkout &&
          checkout.lineItems.map((item: any) => {
            const image = getThumbnail(item.variant.image);
            return (
              <CartItem
                id={item.id}
                name={item.title}
                price={item.variant.price}
                image={image}
                key={item.id}
                onRemove={handleRemove}
              />
            );
          })}
      </Cart>
    </>
  );
};

export default ShopifyCart;

import React from 'react';
import { useShopifyCheckout, useShopifyClient } from '../hooks/shopify';
import CartItem from './cart-item';
import Cart from './cart';
import useStore from '../hooks/use-store';
import { formatCurrency } from '../utils/helpers';

const ShopifyCart: React.FC = () => {
  const setCheckout = useStore(state => state.setCheckout);
  const checkoutId = useStore(state => state.checkoutId);
  const checkout = useStore(state => state.checkout);
  const closeCart = useStore(state => state.closeCart);
  const cartIsOpen = useStore(state => state.cartIsOpen);

  // Setup shopify checkout
  useShopifyCheckout();
  const client = useShopifyClient();

  const handleRemove = (variantId: string) => {
    if (checkoutId) {
      client.checkout
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
    if (image) {
      return (client as any).image.helpers.imageForSize(image, {
        maxWidth: 192,
        maxHeight: 192,
      });
    }
    return image;
  };

  const subtotal = formatCurrency((checkout && checkout.subtotalPrice) || 0);

  return (
    <>
      <Cart
        isOpen={cartIsOpen}
        onClose={closeCart}
        subtotal={subtotal}
        onCheckout={handleCheckout}
      >
        {checkout &&
          checkout.lineItems.map((item: any) => {
            const image = getThumbnail(item.variant.image);
            return (
              <CartItem
                id={item.id}
                name={item.title}
                price={formatCurrency(item.variant.price)}
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

import React from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';
import Cart from './cart';
import useStore from '../hooks/use-store';
import Fonts from './fonts';
import { WindowLocation } from '@reach/router';
import usePrevious from '../hooks/use-previous';
import { getNestedObject } from '../utils/helpers';
import { Query, SanitySocial } from '../types/graphql-types';
import useSal from '../hooks/use-sal';
import { useShopifyCheckout, useShopifyClient } from '../hooks/shopify';
import CartItem from './cart-item';

interface Props {
  location: WindowLocation;
}

const Layout: React.FC<Props> = ({ children, location }) => {
  // Global state values
  const cartIsOpen = useStore(state => state.cartIsOpen);
  const openCart = useStore(state => state.openCart);
  const closeCart = useStore(state => state.closeCart);
  const navIsOpen = useStore(state => state.navIsOpen);
  const openNav = useStore(state => state.openNav);
  const closeNav = useStore(state => state.closeNav);
  const checkout = useStore(state => state.checkout);
  const setCheckout = useStore(state => state.setCheckout);
  const checkoutId = useStore(state => state.checkoutId);

  // Get the current and previous location
  const { pathname } = location;
  const previousPathname = usePrevious(pathname);

  // Close the nav after navigation
  if (previousPathname && previousPathname !== pathname) {
    closeNav();
  }

  // Enable sal.js to handle scroll based animations
  useSal(pathname);

  // Setup shopify checkout
  const client = useShopifyClient();
  useShopifyCheckout();

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

  // Get primary/secondary nav items
  const { site, sanitySiteSettings } = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            primaryNav {
              title
              link
            }
            secondaryNav {
              title
              link
            }
          }
        }
        sanitySiteSettings {
          social {
            facebook
            instagram
            vimeo
          }
        }
      }
    `
  );

  const primaryNav = getNestedObject(site, 'siteMetadata.primaryNav');
  const secondaryNav = getNestedObject(site, 'siteMetadata.secondaryNav');
  const social: SanitySocial = getNestedObject(sanitySiteSettings, 'social');
  const { facebook, instagram, vimeo } = social;

  return (
    <>
      <Fonts />
      <Theme>
        <Nav
          items={primaryNav}
          isOpen={navIsOpen}
          onOpen={openNav}
          onClose={closeNav}
          onCartOpen={openCart}
        />
        <main>{children}</main>
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
        <Footer
          items={secondaryNav}
          facebookLink={facebook || ''}
          instagramLink={instagram || ''}
          vimeoLink={vimeo || ''}
        />
      </Theme>
    </>
  );
};

export default Layout;

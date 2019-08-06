import React from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';
import useStore from '../hooks/use-store';
import Fonts from './fonts';
import { WindowLocation } from '@reach/router';
import usePrevious from '../hooks/use-previous';
import { getNestedObject } from '../utils/helpers';
import {
  Query,
  SanitySocial,
  SanityPageReference,
} from '../types/graphql-types';
import ShopifyCart from './shopify-cart';

interface Props {
  location: WindowLocation;
}

const getNavLinks = (pages: SanityPageReference[]) =>
  pages.map(item => {
    const slug = getNestedObject(item, 'page.slug.current');
    const title: string = getNestedObject(item, 'page.title');
    const link: string = `/${slug === 'home' ? '' : slug + '/'}`;

    return {
      title,
      link,
    };
  });

const Layout: React.FC<Props> = ({ children, location }) => {
  // Global state values
  const openCart = useStore(state => state.openCart);
  const navIsOpen = useStore(state => state.navIsOpen);
  const openNav = useStore(state => state.openNav);
  const closeNav = useStore(state => state.closeNav);
  const checkout = useStore(state => state.checkout);

  // Get the current and previous location
  const { pathname } = location;
  const previousPathname = usePrevious(pathname);

  // Close the nav after navigation
  if (previousPathname && previousPathname !== pathname) {
    closeNav();

    const { activeElement } = document;

    if (activeElement) {
      (activeElement as HTMLElement).blur();
    }
  }

  // Get primary/secondary nav items
  const { sanitySiteSettings } = useStaticQuery<Query>(
    graphql`
      fragment NavPages on SanityNavGroup {
        pages {
          page {
            title
            slug {
              current
            }
          }
        }
      }
      query {
        sanitySiteSettings {
          primaryNav {
            ...NavPages
          }
          secondaryNav {
            ...NavPages
          }
          social {
            facebook
            instagram
            vimeo
          }
        }
      }
    `
  );

  const primaryNav = getNavLinks(
    getNestedObject(sanitySiteSettings, 'primaryNav.pages')
  );
  const secondaryNav = getNavLinks(
    getNestedObject(sanitySiteSettings, 'secondaryNav.pages')
  );
  const social: SanitySocial = getNestedObject(sanitySiteSettings, 'social');
  const { facebook, instagram, vimeo } = social;

  // Count the items in the cart
  const cartQuantity =
    checkout &&
    checkout.lineItems.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );

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
          cartQuantity={cartQuantity}
        />
        <main>{children}</main>
        <ShopifyCart />
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

import React, { useEffect, useRef } from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';
import Cart from './cart';
import useStore from '../hooks/use-store';
import Fonts from './fonts';
import { WindowLocation } from '@reach/router';
import usePrevious from '../hooks/use-previous';
import sal from 'sal.js';
import { isBrowser, getNestedObject } from '../utils/helpers';
import { Query, SanitySocial } from '../types/graphql-types';

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

  // Get the current and previous location
  const { pathname } = location;
  const previousPathname = usePrevious(pathname);

  // Close the nav after navigation
  if (previousPathname && previousPathname !== pathname) {
    closeNav();
  }

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

  // Sal.js
  const salInst = useRef(
    isBrowser
      ? sal({
          threshold: 0.25,
        })
      : null
  );

  // Re-enable sal on route change
  useEffect(() => {
    const sal = salInst.current;
    sal && sal.enable();

    return () => {
      sal && sal.disable();
    };
  }, [pathname]);

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
        <Cart isOpen={cartIsOpen} onClose={closeCart} />
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

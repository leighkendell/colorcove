import React from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';
import Cart from './cart';
import useStore from '../hooks/store';
import Fonts from './fonts';
import { WindowLocation } from '@reach/router';
import usePrevious from '../hooks/use-previous';

interface Props {
  location: WindowLocation;
}

const Layout: React.FC<Props> = ({ children, location }) => {
  // Global state values
  const {
    cartIsOpen,
    openCart,
    closeCart,
    navIsOpen,
    openNav,
    closeNav,
  } = useStore(state => ({
    cartIsOpen: state.cartIsOpen,
    openCart: state.openCart,
    closeCart: state.closeCart,
    navIsOpen: state.navIsOpen,
    openNav: state.openNav,
    closeNav: state.closeNav,
  }));

  // Get the current and previous location
  const { pathname } = location;
  const previousPathname = usePrevious(pathname);

  // Close the nav after navigation
  if (previousPathname && previousPathname !== pathname) {
    closeNav();
  }

  // Get primary/secondary nav items
  const { site } = useStaticQuery(
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
      }
    `
  );

  return (
    <>
      <Fonts />
      <Theme>
        <Nav
          items={site.siteMetadata.primaryNav}
          isOpen={navIsOpen}
          onOpen={openNav}
          onClose={closeNav}
          onCartOpen={openCart}
        />
        <main>{children}</main>
        <Cart isOpen={cartIsOpen} onClose={closeCart} />
        <Footer items={site.siteMetadata.secondaryNav} />
      </Theme>
    </>
  );
};

export default Layout;

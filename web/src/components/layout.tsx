import React from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';
import Cart from './cart';
import useStore from '../hooks/store';
import Fonts from './fonts';

const Layout: React.FC = ({ children }) => {
  const { cartIsOpen, openCart, closeCart } = useStore(state => ({
    cartIsOpen: state.cartIsOpen,
    openCart: state.openCart,
    closeCart: state.closeCart,
  }));

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
        <Nav items={site.siteMetadata.primaryNav} onCartOpen={openCart} />
        <main>{children}</main>
        <Cart isOpen={cartIsOpen} onClose={closeCart} />
        <Footer items={site.siteMetadata.secondaryNav} />
      </Theme>
    </>
  );
};

export default Layout;

import React from 'react';
import Theme from '../components/theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { useStaticQuery, graphql } from 'gatsby';

const Layout: React.FC = ({ children }) => {
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
    <Theme>
      <Nav items={site.siteMetadata.primaryNav} />
      {children}
      <Footer items={site.siteMetadata.secondaryNav} />
    </Theme>
  );
};

export default Layout;

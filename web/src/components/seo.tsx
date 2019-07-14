import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  title?: string | null;
}

const SEO: React.FC<Props> = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-au',
      }}
      title={title || ''}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
};

export default SEO;

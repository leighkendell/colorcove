import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Query } from '../types/graphql-types';

interface Props {
  title?: string | null;
  description?: string | null;
  image?: string | null;
}

const SEO: React.FC<Props> = ({ title, description, image }) => {
  const { site } = useStaticQuery<Query>(
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

  const metaDescription =
    description ||
    (site && site.siteMetadata && site.siteMetadata.description) ||
    '';

  const ogImage = image || '';

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-au',
      }}
      title={title || ''}
      titleTemplate={`%s | ${site &&
        site.siteMetadata &&
        site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || '',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:width`,
          content: `2000`,
        },
        {
          property: `og:image:height`,
          content: `1044`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content:
            (site && site.siteMetadata && site.siteMetadata.author) || '',
        },
        {
          name: `twitter:title`,
          content: title || '',
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: ogImage,
        },
      ]}
    />
  );
};

export default SEO;

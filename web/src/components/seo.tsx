import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import { getNestedObject } from '../utils/helpers';

interface Props {
  title?: string | null;
  description?: string | null;
  image?: string | null;
}

const SEO: React.FC<Props> = ({ title, description, image }) => {
  const { site, sanitySiteSettings } = useStaticQuery<Query>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        sanitySiteSettings {
          seo {
            title
            description
            image {
              ...OgImage
            }
          }
        }
      }
    `
  );

  const gatsbyTitle = getNestedObject<string>(site, 'siteMetadata.title');

  const fallbackTitle = getNestedObject<string>(
    sanitySiteSettings,
    'seo.title'
  );

  const gatsbyDescription = getNestedObject<string>(
    site,
    'siteMetadata.description'
  );

  const fallbackDescription = getNestedObject<string>(
    sanitySiteSettings,
    'seo.description'
  );

  const fallbackImage = getNestedObject<string>(
    sanitySiteSettings,
    'seo.image.asset.fixed.src'
  );

  const metaDescription =
    description || fallbackDescription || gatsbyDescription;

  const ogImage = image || fallbackImage;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-au',
      }}
      title={title || fallbackTitle || gatsbyTitle}
      titleTemplate={`%s | ${gatsbyTitle}`}
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

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import { Query } from '../types/graphql-types';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';
import Module from '../components/module';

interface Props {
  data: Query;
}

const IndexPage: React.FC<Props> = ({ data: { sanityPage } }) => {
  if (sanityPage) {
    const { hero, modules } = sanityPage;

    // Image Data
    const image: FluidObject | undefined = getNestedObject(
      hero,
      'image.asset.fluid'
    );
    const backgroundColor: string | undefined = getNestedObject(
      hero,
      'image.asset.metadata.palette.dominant.background'
    );

    return (
      <>
        {hero && (
          <Header
            title={hero.title ? hero.title : ''}
            description={hero.intro ? hero.intro : ''}
            image={image}
            backgroundColor={backgroundColor}
          />
        )}
        {modules && <Module modules={modules} />}
      </>
    );
  } else {
    return null;
  }
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    sanityPage(slug: { current: { eq: "home" } }) {
      id
      title
      hero {
        title
        intro
        image {
          asset {
            fluid(maxWidth: 2880, maxHeight: 1600) {
              ...GatsbySanityImageFluid
            }
            metadata {
              palette {
                dominant {
                  background
                }
              }
            }
          }
        }
      }
      modules {
        ... on SanityFeatureText {
          _key
          _type
          layout
          heading
          text
        }
        ... on SanityVideo {
          _key
          _type
          url
          image {
            asset {
              fluid(maxWidth: 1920, maxHeight: 1080) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

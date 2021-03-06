import { graphql } from 'gatsby';

// Image comparison image
export const comparisonImage = graphql`
  fragment ComparisonImage on SanityMainImage {
    asset {
      fluid(maxWidth: 2000, maxHeight: 1125) {
        ...GatsbySanityImageFluid
      }
    }
  }
`;

// Card image
export const cardImage = graphql`
  fragment CardImage on SanityMainImage {
    asset {
      fluid(maxWidth: 864, maxHeight: 864) {
        ...GatsbySanityImageFluid
      }
    }
  }
`;

export const ogImage = graphql`
  fragment OgImage on SanityMainImage {
    asset {
      fixed(width: 2000, height: 1044) {
        src
      }
    }
  }
`;

// Image metadata
export const imageMeta = graphql`
  fragment ImageMeta on SanityImageAsset {
    metadata {
      palette {
        dominant {
          background
        }
      }
    }
  }
`;

// Product card
export const productCard = graphql`
  fragment ProductCard on SanityProduct {
    id
    title
    slug {
      current
    }
    description
    image {
      ...CardImage
    }
  }
`;

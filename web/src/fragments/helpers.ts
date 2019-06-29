import { graphql } from 'gatsby';

// Image comparison image
export const comparisonImage = graphql`
  fragment ComparisonImage on SanityMainImage {
    asset {
      fluid(maxWidth: 2000, maxHeight: 837) {
        ...GatsbySanityImageFluid_noBase64
      }
    }
  }
`;

// Card image
export const cardImage = graphql`
  fragment CardImage on SanityMainImage {
    asset {
      fluid(maxWidth: 864, maxHeight: 648) {
        ...GatsbySanityImageFluid_noBase64
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

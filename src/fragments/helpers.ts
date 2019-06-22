import { graphql } from 'gatsby';

// Image comparison image
export const comparisonImage = graphql`
  fragment ComparisonImage on SanityMainImage {
    asset {
      fluid(maxWidth: 2000, maxHeight: 837) {
        ...GatsbySanityImageFluid
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

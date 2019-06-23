import { graphql } from 'gatsby';

// Feature text module
export const featureText = graphql`
  fragment FeatureText on SanityFeatureText {
    _key
    _type
    layout
    heading
    text
  }
`;

// Vimeo module
export const vimeo = graphql`
  fragment Vimeo on SanityVimeo {
    _key
    _type
    data {
      url
      width
      height
      thumbnail
    }
    image {
      asset {
        fluid(maxWidth: 2000, maxHeight: 1125) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`;

// Image comparison module
export const imageComparison = graphql`
  fragment ImageComparison on SanityImageComparison {
    _key
    _type
    name
    beforeImage {
      ...ComparisonImage
    }
    afterImage {
      ...ComparisonImage
    }
  }
`;

// Hero module
export const hero = graphql`
  fragment Hero on SanityHero {
    title
    intro
    image {
      asset {
        fluid(maxWidth: 2880, maxHeight: 1600) {
          ...GatsbySanityImageFluid
        }
        ...ImageMeta
      }
    }
  }
`;

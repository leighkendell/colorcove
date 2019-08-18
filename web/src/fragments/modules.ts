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

// Feature text group module
export const featureTextGroup = graphql`
  fragment FeatureTextGroup on SanityFeatureTextGroup {
    _key
    _type
    items {
      _key
      heading
      text
    }
  }
`;

// Rich text module
export const richText = graphql`
  fragment RichText on SanityRichText {
    _key
    _type
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

// Image module
export const image = graphql`
  fragment InlineImage on SanityInlineImage {
    _key
    _type
    alt
    image {
      asset {
        fluid(maxWidth: 2000) {
          ...GatsbySanityImageFluid
        }
        metadata {
          dimensions {
            width
          }
        }
      }
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
    button {
      text
      link {
        slug {
          current
        }
      }
    }
  }
`;

// Product group module
export const productGroup = graphql`
  fragment ProductGroup on SanityProductGroup {
    _key
    _type
    title
    products {
      product {
        ...ProductCard
      }
    }
  }
`;

// Form module
export const form = graphql`
  fragment Form on SanityForm {
    _key
    _type
    type
  }
`;

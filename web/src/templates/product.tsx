import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Module from '../components/module';
import Button from '../components/button';
import { ReactComponent as Icon } from '../images/cart.svg';
import Layout from '../components/layout';

interface Props {
  data: Query;
}

const ProductTemplate: React.FC<Props> = ({ data: { sanityProduct } }) => {
  if (sanityProduct) {
    const { hero, modules, shopifyDefaultVariant } = sanityProduct;

    return (
      <Layout>
        {hero && (
          <Hero hero={hero}>
            {shopifyDefaultVariant && (
              <Button icon>
                <Icon />
                Buy for {shopifyDefaultVariant.price}
              </Button>
            )}
          </Hero>
        )}
        {modules && <Module modules={modules} />}
      </Layout>
    );
  } else {
    return null;
  }
};

export default ProductTemplate;

export const productQuery = graphql`
  query ProductTemplateQuery($id: String!) {
    sanityProduct(id: { eq: $id }) {
      title
      hero {
        ...Hero
      }
      modules {
        ... on SanityFeatureText {
          ...FeatureText
        }
        ... on SanityVimeo {
          ...Vimeo
        }
        ... on SanityImageComparison {
          ...ImageComparison
        }
      }
      shopifyDefaultVariant {
        price
      }
    }
  }
`;

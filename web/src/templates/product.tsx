import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Module from '../components/module';
import Button from '../components/button';
import { ReactComponent as Icon } from '../images/cart.svg';
import { useShopifyProduct, useShopifyClient } from '../hooks/shopify';
import useStore from '../hooks/use-store';

interface Props {
  data: Query;
}

const ProductTemplate: React.FC<Props> = ({
  data: { sanityProduct, shopifyProduct },
}) => {
  // Global state
  const checkoutId = useStore(state => state.checkoutId);
  const setCheckout = useStore(state => state.setCheckout);

  const product = useShopifyProduct(
    (shopifyProduct && shopifyProduct.shopifyId) || ''
  );
  const client = useShopifyClient();

  const defaultVariant = product && product.variants[0];

  // TODO: Clean up types once @types/shopify-buy are updated
  const handleBuy = () => {
    if (client && checkoutId && defaultVariant) {
      const lineItemsToAdd = [{ variantId: defaultVariant.id, quantity: 1 }];
      (client as any).checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout: any) => setCheckout(checkout));
    }
  };

  if (sanityProduct) {
    const { hero, modules, shopifyDefaultVariant } = sanityProduct;
    const price =
      (defaultVariant && defaultVariant.price) ||
      (shopifyDefaultVariant && shopifyDefaultVariant.price) ||
      0;

    return (
      <>
        {hero && (
          <Hero hero={hero}>
            <Button icon onClick={handleBuy}>
              <Icon />
              Buy for {price}
            </Button>
          </Hero>
        )}
        {modules && <Module modules={modules} />}
      </>
    );
  } else {
    return null;
  }
};

export default ProductTemplate;

export const productQuery = graphql`
  query ProductTemplateQuery($id: String!, $slug: String!) {
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
    shopifyProduct(handle: { eq: $slug }) {
      shopifyId
    }
  }
`;

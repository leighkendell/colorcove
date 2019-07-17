import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Module from '../components/module';
import Button from '../components/button';
import { ReactComponent as Icon } from '../images/cart.svg';
import { useShopifyProduct, useShopifyClient } from '../hooks/shopify';
import useStore from '../hooks/use-store';
import Message from '../components/message';
import { formatCurrency, getNestedObject } from '../utils/helpers';
import SEO from '../components/seo';

interface Props {
  data: Query;
}

const ProductTemplate: React.FC<Props> = ({
  data: { sanityProduct, shopifyProduct },
}) => {
  // Global state
  const checkoutId = useStore(state => state.checkoutId);
  const setCheckout = useStore(state => state.setCheckout);

  // Local state
  const [message, setMessage] = useState('');
  const [updating, setUpdating] = useState(false);

  const product = useShopifyProduct(
    (shopifyProduct && shopifyProduct.shopifyId) || ''
  );
  const client = useShopifyClient();

  const defaultVariant = product && product.variants[0];

  // TODO: Clean up types once @types/shopify-buy are updated
  const handleBuy = () => {
    if (checkoutId && defaultVariant) {
      setMessage('Updating cart...');
      setUpdating(true);

      const lineItemsToAdd = [{ variantId: defaultVariant.id, quantity: 1 }];
      (client as any).checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then((checkout: any) => {
          setMessage('Product successfully added to your cart');
          setUpdating(false);
          setCheckout(checkout);
        });
    }
  };

  if (sanityProduct) {
    const {
      hero,
      modules,
      title,
      description,
      image,
      _rawModules,
      shopifyDefaultVariant,
    } = sanityProduct;
    const price =
      (defaultVariant && defaultVariant.price) ||
      (shopifyDefaultVariant && shopifyDefaultVariant.price) ||
      0;
    const ogImage = getNestedObject(image, 'asset.fixed.src');

    return (
      <>
        <SEO title={title} description={description} image={ogImage} />
        {hero && (
          <Hero hero={hero}>
            <Button icon onClick={handleBuy} disabled={updating}>
              <Icon />
              Buy for {formatCurrency(price)}
            </Button>
          </Hero>
        )}
        {modules && <Module modules={modules} rawModules={_rawModules} />}
        <Message isVisible={updating}>{message}</Message>
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
      description
      image {
        ...OgImage
      }
      hero {
        ...Hero
      }
      _rawModules(resolveReferences: { maxDepth: 10 })
      modules {
        ... on SanityFeatureText {
          ...FeatureText
        }
        ... on SanityFeatureTextGroup {
          ...FeatureTextGroup
        }
        ... on SanityRichText {
          ...RichText
        }
        ... on SanityVimeo {
          ...Vimeo
        }
        ... on SanityImageComparison {
          ...ImageComparison
        }
        ... on SanityProductGroup {
          ...ProductGroup
        }
        ... on SanityInlineImage {
          ...InlineImage
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

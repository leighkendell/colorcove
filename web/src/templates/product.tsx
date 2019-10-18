import React, { useState } from 'react';
import { Product } from 'schema-dts';
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
import TextBlock from '../components/text-block';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import Helmet from 'react-helmet';

interface Props {
  data: Query;
}

const ProductTemplate: React.FC<Props> = ({
  data: { sanityProduct, shopifyProduct },
}) => {
  // Global state
  const checkoutId = useStore(state => state.checkoutId);
  const setCheckout = useStore(state => state.setCheckout);
  const checkout = useStore(state => state.checkout);

  // Local state
  const [message, setMessage] = useState('');
  const [updating, setUpdating] = useState(false);

  const product = useShopifyProduct(
    (shopifyProduct && shopifyProduct.shopifyId) || ''
  );
  const client = useShopifyClient();

  const defaultVariant = product && product.variants[0];

  let alreadyInCart = false;
  if (defaultVariant && checkout) {
    alreadyInCart = checkout.lineItems.some(
      item => (item as any).variant.id === defaultVariant.id
    );
  }

  // TODO: Clean up types once @types/shopify-buy are updated
  const handleBuy = () => {
    if (checkoutId && defaultVariant && !alreadyInCart && checkout) {
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
    const ogImage = getNestedObject<string | undefined>(
      image,
      'asset.fixed.src'
    );

    const buyButton = (text: string) => (
      <Button icon onClick={handleBuy} disabled={updating || alreadyInCart}>
        <Icon />
        {alreadyInCart ? 'Already in cart' : text}
      </Button>
    );

    // Structured data
    const productMeta: Product = {
      '@type': 'Product',
      name: title as string,
      description: description as string,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: formatCurrency(price),
      },
    };

    return (
      <>
        <SEO title={title} description={description} image={ogImage} />
        <Helmet>
          <script type="application/ld+json">{`
            ${JSON.stringify({
              '@context': 'http://schema.org',
              ...productMeta,
            })}
          `}</script>
        </Helmet>
        {hero && (
          <Hero hero={hero}>
            {buyButton(`Buy for ${formatCurrency(price)}`)}
          </Hero>
        )}
        {modules && <Module modules={modules} rawModules={_rawModules} />}
        <Section>
          <Wrapper>
            <TextBlock
              title="Experience true film color"
              description={`Bring life to your footage, buy the ${title} now.`}
            >
              {buyButton(`Add to cart`)}
            </TextBlock>
          </Wrapper>
        </Section>
        <Message isVisible={updating}>{message}</Message>
      </>
    );
  } else {
    return null;
  }
};

export default ProductTemplate;

export const productQuery = graphql`
  query ProductTemplateQuery($id: String!, $shopifyHandle: String!) {
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
        ... on SanityGridList {
          ...GridList
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
        ... on SanityImageComparisonGroup {
          ...ImageComparisonGroup
        }
        ... on SanityProductGroup {
          ...ProductGroup
        }
        ... on SanityInlineImage {
          ...InlineImage
        }
        ... on SanityForm {
          ...Form
        }
      }
      shopifyDefaultVariant {
        price
      }
    }
    shopifyProduct(handle: { eq: $shopifyHandle }) {
      shopifyId
    }
  }
`;

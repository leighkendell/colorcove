import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import ProductCardGroup from '../components/product-card-group';
import SEO from '../components/seo';
import { getNestedObject } from '../utils/helpers';

interface Props {
  data: Query;
}

const ProductsTemplate: React.FC<Props> = ({
  data: { sanityPage, allSanityProduct },
}) => {
  if (sanityPage && allSanityProduct) {
    const { hero, title, description, image } = sanityPage;
    const ogImage = getNestedObject<string | undefined>(
      image,
      'asset.fixed.src'
    );

    return (
      <>
        <SEO title={title} description={description} image={ogImage} />
        {hero && <Hero hero={hero} />}
        <Section>
          <Wrapper>
            <ProductCardGroup products={allSanityProduct.edges} />
          </Wrapper>
        </Section>
      </>
    );
  } else {
    return null;
  }
};

export default ProductsTemplate;

export const productsQuery = graphql`
  query ProductsTemplateQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      description
      image {
        ...OgImage
      }
      hero {
        ...Hero
      }
    }
    allSanityProduct(
      filter: { slug: { current: { ne: "null" } }, shopifyId: { gt: 0 } }
      sort: { fields: _createdAt, order: DESC }
    ) {
      edges {
        node {
          ...ProductCard
        }
      }
    }
  }
`;

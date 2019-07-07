import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import ProductCardGroup from '../components/product-card-group';

interface Props {
  data: Query;
}

const ProductsTemplate: React.FC<Props> = ({
  data: { sanityPage, allSanityProduct },
}) => {
  if (sanityPage && allSanityProduct) {
    const { hero } = sanityPage;

    return (
      <>
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

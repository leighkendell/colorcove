import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Module from '../components/module';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import ProductCardGroup from '../components/product-card-group';
import Page from '../components/page';

interface Props {
  data: Query;
}

const ProductsPage: React.FC<Props> = ({
  data: { sanityPage, allSanityProduct },
}) => {
  if (sanityPage && allSanityProduct) {
    const { hero, modules } = sanityPage;

    return (
      <Page>
        {hero && <Hero hero={hero} />}
        <Section>
          <Wrapper>
            <ProductCardGroup products={allSanityProduct.edges} />
          </Wrapper>
        </Section>
        {modules && <Module modules={modules} />}
      </Page>
    );
  } else {
    return null;
  }
};

export default ProductsPage;

export const productsQuery = graphql`
  query ProductsPageQuery {
    sanityPage(slug: { current: { eq: "products" } }) {
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

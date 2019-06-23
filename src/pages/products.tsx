import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Hero from '../components/hero';
import Module from '../components/module';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import CardGroup from '../components/card-group';
import Card from '../components/card';
import { FluidObject } from 'gatsby-image';
import { getNestedObject } from '../utils/helpers';

interface Props {
  data: Query;
}

const ProductsPage: React.FC<Props> = ({
  data: { sanityPage, allSanityProduct },
}) => {
  if (sanityPage) {
    const { hero, modules } = sanityPage;

    return (
      <>
        {hero && <Hero hero={hero} />}
        <Section>
          <Wrapper>
            <CardGroup>
              {allSanityProduct &&
                allSanityProduct.edges.map(product => {
                  const { id, title, slug, hero } = product.node;
                  const link = `/products/${slug && slug.current}`;
                  const image: FluidObject = getNestedObject(
                    hero,
                    'image.asset.fluid'
                  );

                  return (
                    <Card
                      title={title || ''}
                      description="fsdfsd"
                      link={link}
                      image={image}
                      key={id}
                    />
                  );
                })}
            </CardGroup>
          </Wrapper>
        </Section>
        {modules && <Module modules={modules} />}
      </>
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
    allSanityProduct(filter: { slug: { current: { ne: "null" } } }) {
      edges {
        node {
          id
          title
          hero {
            ...Hero
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

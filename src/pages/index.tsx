import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Module from '../components/module';
import Hero from '../components/hero';

interface Props {
  data: Query;
}

const IndexPage: React.FC<Props> = ({ data: { sanityPage } }) => {
  if (sanityPage) {
    const { hero, modules } = sanityPage;

    return (
      <>
        {hero && <Hero hero={hero} />}
        {modules && <Module modules={modules} />}
      </>
    );
  } else {
    return null;
  }
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    sanityPage(slug: { current: { eq: "home" } }) {
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
    }
  }
`;

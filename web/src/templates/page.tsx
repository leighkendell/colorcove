import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Module from '../components/module';
import Hero from '../components/hero';

interface Props {
  data: Query;
}

const PageTemplate: React.FC<Props> = ({ data: { sanityPage } }) => {
  if (sanityPage) {
    const { hero, modules, _rawModules } = sanityPage;

    return (
      <>
        {hero && <Hero hero={hero} />}
        {modules && <Module modules={modules} rawModules={_rawModules} />}
      </>
    );
  } else {
    return null;
  }
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageTemplateQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      hero {
        ...Hero
      }
      _rawModules
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
    }
  }
`;

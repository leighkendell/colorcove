import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Module from '../components/module';
import Hero from '../components/hero';
import SEO from '../components/seo';
import { getNestedObject } from '../utils/helpers';

interface Props {
  data: Query;
}

const PageTemplate: React.FC<Props> = ({ data: { sanityPage } }) => {
  if (sanityPage) {
    const {
      hero,
      title,
      description,
      image,
      modules,
      _rawModules,
    } = sanityPage;
    const ogImage = getNestedObject(image, 'asset.fixed.src');

    return (
      <>
        <SEO title={title} description={description} image={ogImage} />
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
        ... on SanityForm {
          ...Form
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import TextBlock from '../components/text-block';
import Section from '../components/section';
import Wrapper from '../components/wrapper';

const IndexPage = ({ data: { prismicHome } }: any) => {
  return (
    <>
      <Header
        title={prismicHome.data.title.text}
        description={prismicHome.data.intro.text}
        image={prismicHome.data.image.localFile.childImageSharp.fluid}
      />

      {prismicHome.data.body.map(({ slice_type, primary }: any) => {
        console.log(slice_type, primary);
        let content;

        // Feature text block
        if (slice_type === 'feature_text') {
          content = (
            <TextBlock
              title={primary.heading.text}
              description={primary.text.text}
              horizontal={primary.layout === 'Horizontal'}
            />
          );
        }

        return (
          <Section>
            <Wrapper>{content}</Wrapper>
          </Section>
        );
      })}
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    prismicHome {
      data {
        intro {
          text
        }
        title {
          text
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          slice_type
          ... on PrismicHomeBodyFeatureText {
            id
            primary {
              layout
              heading {
                text
              }
              text {
                text
              }
            }
          }
        }
      }
    }
  }
`;

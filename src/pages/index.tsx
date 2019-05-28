import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';

const IndexPage = ({ data: { prismicHome } }: any) => {
  return (
    <>
      <Header
        title={prismicHome.data.title.text}
        description={prismicHome.data.intro.text}
        image={prismicHome.data.image.localFile.childImageSharp.fluid}
      />
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
      }
    }
  }
`;

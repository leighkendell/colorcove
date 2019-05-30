import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Slice from '../components/slice';

const IndexPage = ({ data: { prismicHome } }: any) => {
  return (
    <>
      <Header
        title={prismicHome.data.title.text}
        description={prismicHome.data.intro.text}
        image={prismicHome.data.image.localFile.childImageSharp.fluid}
      />
      <Slice data={prismicHome.data.body} />
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
          ... on PrismicHomeBodyFeatureText {
            slice_type
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
          ... on PrismicHomeBodyVideo {
            id
            slice_type
            primary {
              video {
                thumbnail_width
                thumbnail_height
                embed_url
              }
              video_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

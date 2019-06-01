import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Slice from '../components/slice';
import { Query } from '../types/graphql-types';

interface Props {
  data: Query;
}

const IndexPage: React.FC<Props> = ({ data: { prismicHome } }) => {
  const { data } = prismicHome;

  return (
    <>
      <Header
        title={data.title.text}
        description={data.intro.text}
        image={data.image.localFile.childImageSharp.fluid}
      />
      <Slice data={data.body} />
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

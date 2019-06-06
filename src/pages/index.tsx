import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Slice from '../components/slice';
import { Query } from '../types/graphql-types';
import { FluidObject } from 'gatsby-image';

interface Props {
  data: Query;
}

const IndexPage: React.FC<Props> = ({ data: { prismicHome } }) => {
  if (prismicHome && prismicHome.data) {
    const { title, intro, image, body } = prismicHome.data;
    const headerImage =
      image &&
      image.localFile &&
      image.localFile.childImageSharp &&
      image.localFile.childImageSharp.fluid;

    return (
      <>
        <Header
          title={title && title.text ? title.text : ''}
          description={intro && intro.text ? intro.text : ''}
          image={headerImage as FluidObject}
        />
        <Slice data={body} />
      </>
    );
  } else {
    return null;
  }
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

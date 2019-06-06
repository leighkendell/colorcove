import React from 'react';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Header from '../components/header';
import Slice from '../components/slice';
import { FluidObject } from 'gatsby-image';

interface Props {
  data: Query;
}

const ProductTemplate: React.FC<Props> = ({ data: { prismicProduct } }) => {
  if (prismicProduct && prismicProduct.data) {
    const { title, intro, image, body } = prismicProduct.data;
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

export default ProductTemplate;

export const pageQuery = graphql`
  query ProductQuery($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
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
          ... on PrismicProductBodyImageComparison {
            id
            slice_type
            primary {
              name {
                text
              }
              before_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              after_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 2000) {
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

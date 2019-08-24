import React from 'react';
import SEO from '../components/seo';
import Section from '../components/section';
import Wrapper from '../components/wrapper';
import Heading from '../components/heading';
import Text from '../components/text';
import Button from '../components/button';
import RichText from '../components/rich-text';
import { Link, graphql } from 'gatsby';
import Image from '../components/image';
import { Query } from '../types/graphql-types';
import { getNestedObject } from '../utils/helpers';
import Header from '../components/header';

interface Props {
  data: Query;
}

const NotFoundPage: React.FC<Props> = ({ data }) => {
  const image = getNestedObject(data, 'file.childImageSharp.fluid');

  return (
    <>
      <SEO title="404" />
      <Header title="404"></Header>
      <Section disableFadeIn>
        <Wrapper>
          <RichText>
            <Text>
              Devastating... the page you were looking for couldn't be found.
            </Text>
            <Image
              image={image}
              alt="A man looking sad, staring through a window"
            />
            <Text>Try the main navigation, or go back to the home page.</Text>
            <Button to="/" as={Link}>
              Back to colorcove home
            </Button>
          </RichText>
        </Wrapper>
      </Section>
    </>
  );
};

export default NotFoundPage;

export const NotFoundQuery = graphql`
  query {
    file(relativePath: { eq: "sad-404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

import React from 'react';
import { FluidObject, GatsbyImageProps } from 'gatsby-image';
import styled from 'styled-components';
import Image from './image';

interface Props {
  image: FluidObject;
  alt: string;
  width: string;
  loading?: GatsbyImageProps['loading'];
}

const Wrapper = styled.figure<{ maxWidth: string }>`
  max-width: ${props => props.maxWidth}px;
  margin-right: 0;
  margin-left: 0;
`;

const InlineImage: React.FC<Props> = ({ image, alt, width, loading }) => {
  return (
    <Wrapper maxWidth={width}>
      <Image image={image} alt={alt} loading={loading} />
    </Wrapper>
  );
};

export default InlineImage;

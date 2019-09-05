import React from 'react';
import { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import Image from './image';

interface Props {
  image: FluidObject;
  alt: string;
  width: string;
}

const Wrapper = styled.figure<{ maxWidth: string }>`
  max-width: ${props => props.maxWidth}px;
  margin-right: 0;
  margin-left: 0;
`;

const InlineImage: React.FC<Props> = ({ image, alt, width }) => {
  return (
    <Wrapper maxWidth={width}>
      <Image image={image} alt={alt} />
    </Wrapper>
  );
};

export default InlineImage;

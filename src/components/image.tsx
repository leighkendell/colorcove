import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
  image: FluidObject;
  alt: string;
  className?: string;
}

const Image: React.FC<Props> = ({ image, alt, className }) => (
  <Img fluid={image} alt={alt} className={className} />
);

export default Image;

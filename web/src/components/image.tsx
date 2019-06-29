import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { colorcoveTheme } from '../utils/theme';

interface Props {
  image: FluidObject;
  alt: string;
  backgroundColor?: string;
  className?: string;
  style?: object;
}

const Image: React.FC<Props> = React.forwardRef<Img, Props>(
  ({ image, alt, backgroundColor, className, style }, ref) => (
    <Img
      fluid={image}
      backgroundColor={backgroundColor || colorcoveTheme.colorLightGrey}
      fadeIn={true}
      alt={alt}
      className={className}
      style={style}
      ref={ref}
    />
  )
);

export default Image;

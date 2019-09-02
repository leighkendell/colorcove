import React, { useRef, useMemo } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { colorcoveTheme } from '../utils/theme';

interface Props {
  image: FluidObject;
  alt: string;
  onLoad?: () => void;
  backgroundColor?: string;
  className?: string;
  style?: object;
}

const replaceSrc = (imageString: string | undefined) =>
  (imageString && imageString.replace(/&fm=webp/g, '$&&q=95')) || undefined;

const Image: React.FC<Props> = React.forwardRef<Img, Props>(
  ({ image, alt, onLoad, backgroundColor, className, style }, ref) => {
    // TODO: Replace this when sanity has a proper way of specifying image quality params
    const fluidObject = useRef<FluidObject>(image);
    const srcWebp = useMemo(() => replaceSrc(image.srcWebp), [image.srcWebp]);
    const srcSetWebp = useMemo(() => replaceSrc(image.srcSetWebp), [
      image.srcSetWebp,
    ]);

    fluidObject.current = {
      ...image,
      srcWebp,
      srcSetWebp,
    };

    return (
      <Img
        fluid={fluidObject.current}
        backgroundColor={backgroundColor || colorcoveTheme.colorLightGrey}
        fadeIn={true}
        onLoad={onLoad}
        alt={alt}
        className={className}
        style={style}
        ref={ref}
      />
    );
  }
);

export default Image;

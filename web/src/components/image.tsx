import React, { useEffect, useState } from 'react';
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

const Image: React.FC<Props> = React.forwardRef<Img, Props>(
  ({ image, alt, onLoad, backgroundColor, className, style }, ref) => {
    const [fluidObject, setFluidObject] = useState<FluidObject | null>(null);

    // TODO: Replace this when sanity has a proper way of specifying image quality params
    // Sets the fluid object based on props and replaces all webp sources with heigher quality output
    useEffect(() => {
      const replaceSrc = (imageString: string) =>
        imageString.replace(/&fm=webp/g, '$&&q=95');

      if (image.srcWebp && image.srcSetWebp) {
        const srcWebp = replaceSrc(image.srcWebp);
        const srcSetWebp = replaceSrc(image.srcSetWebp);
        setFluidObject({
          ...image,
          srcWebp,
          srcSetWebp,
        });
      }
    }, [image]);

    return (
      <>
        {fluidObject && (
          <Img
            fluid={fluidObject}
            backgroundColor={backgroundColor || colorcoveTheme.colorLightGrey}
            fadeIn={true}
            onLoad={onLoad}
            alt={alt}
            className={className}
            style={style}
            ref={ref}
          />
        )}
      </>
    );
  }
);

export default Image;

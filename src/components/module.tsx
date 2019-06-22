import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import TextBlock from './text-block';
import Video from './video';
import {
  SanityFeatureText,
  SanityVimeo,
  SanityImageComparison,
} from '../types/graphql-types';
import { getNestedObject } from '../utils/helpers';
import { FluidObject } from 'gatsby-image';
import ImageComparison from './image-comparison';

interface Props {
  modules: any[];
}

const Module: React.FC<Props> = ({ modules }) => {
  const content = modules.map(({ _key, _type, ...data }) => {
    let module = null;

    switch (_type) {
      // Feature text module
      case 'featureText':
        const { heading, text, layout } = data as SanityFeatureText;

        module = (
          <TextBlock
            title={heading ? heading : ''}
            description={text ? text : ''}
            horizontal={layout === 'horizontal'}
          />
        );
        break;

      // Vimeo module
      case 'vimeo':
        const { image, data: videoData } = data as SanityVimeo;
        const placeholder: FluidObject = getNestedObject(image, 'asset.fluid');

        if (videoData) {
          const { url, width, height, thumbnail } = videoData;
          const fallbackPlaceholder: FluidObject = {
            aspectRatio: 2,
            src: thumbnail || '',
            srcSet: '',
            sizes: '',
          };

          module = (
            <Video
              url={(url && url) || ''}
              width={(width && width) || 1920}
              height={(height && height) || 1080}
              image={placeholder || fallbackPlaceholder}
            />
          );
        }
        break;

      // Image comparison module
      case 'imageComparison':
        const { name, beforeImage, afterImage } = data as SanityImageComparison;

        const before: FluidObject | undefined = getNestedObject(
          beforeImage,
          'asset.fluid'
        );

        const after: FluidObject | undefined = getNestedObject(
          afterImage,
          'asset.fluid'
        );

        if (before && after) {
          module = (
            <ImageComparison
              beforeImage={before}
              afterImage={after}
              beforeLabel="As shot"
              afterLabel={(name && name) || ''}
            />
          );
        }
        break;

      default:
        module = <>Unkown module</>;
        break;
    }

    return (
      <Section key={_key}>
        <Wrapper>{module}</Wrapper>
      </Section>
    );
  });

  return <>{content}</>;
};

export default Module;

import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import TextBlock from './text-block';
import Video from './video';
import { SanityFeatureText, SanityVideo } from '../types/graphql-types';
import { getNestedObject } from '../utils/helpers';
import { FluidObject } from 'gatsby-image';

interface Props {
  modules: any[];
}

const Module: React.FC<Props> = ({ modules }) => {
  const content = modules.map(({ _key, _type, ...data }) => {
    let module;

    switch (_type) {
      // Featured text module
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

      // Video module
      case 'video':
        const { url, image } = data as SanityVideo;
        const placeholder: FluidObject = getNestedObject(image, 'asset.fluid');

        module = (
          <Video
            url={url ? url : ''}
            width={16}
            height={9}
            image={placeholder}
          />
        );
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

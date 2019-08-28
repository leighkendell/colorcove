import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import TextBlock from './text-block';
import Video from './video';
import {
  SanityFeatureText,
  SanityVimeo,
  SanityImageComparison,
  SanityProductGroup,
  SanityProductReference,
  SanityInlineImage,
  SanityFeatureTextGroup,
  SanityBlock,
  SanityForm,
  SanityGridList,
  SanityImageComparisonGroup,
} from '../types/graphql-types';
import { getNestedObject } from '../utils/helpers';
import { FluidObject } from 'gatsby-image';
import ImageComparison from './image-comparison';
import ProductCardGroup from './product-card-group';
import Heading from './heading';
import InlineImage from './inline-image';
import TextBlockGroup from './text-block-group';
import PortableText from './portable-text';
import ContactForm from './contact-form';
import GridList from './grid-list';
import GridListItem from './grid-list-item';
import ImageComparisonGroup from './image-comparison-group';

interface Props {
  modules: any[];
  rawModules: any[];
}

const Module: React.FC<Props> = ({ modules, rawModules }) => {
  const content = modules.map(({ _key, _type, ...data }, index) => {
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

      // Feature text group module
      case 'featureTextGroup':
        const { items } = data as SanityFeatureTextGroup;

        if (items) {
          module = (
            <TextBlockGroup>
              {items.map(item => (
                <TextBlock
                  title={(item && item.heading) || ''}
                  description={(item && item.text) || ''}
                  key={(item && item._key) || ''}
                />
              ))}
            </TextBlockGroup>
          );
        }
        break;

      // Grid list module
      case 'gridList':
        const {
          heading: gridHeading,
          listItems: gridItems,
        } = data as SanityGridList;

        module = (
          <>
            {gridHeading && (
              <Heading type="h2" align="center">
                {gridHeading}
              </Heading>
            )}
            {gridItems && (
              <GridList>
                {gridItems.map(
                  (item, index) =>
                    item && (
                      <GridListItem key={item + index}>{item}</GridListItem>
                    )
                )}
              </GridList>
            )}
          </>
        );
        break;

      // Rich text module
      case 'richText':
        const blocks = rawModules[index].blocks as SanityBlock[];
        module = <PortableText blocks={blocks} />;
        break;

      // Vimeo module
      case 'vimeo':
        const {
          title: videoTitle,
          image: thumbnail,
          data: videoData,
        } = data as SanityVimeo;
        const placeholder: FluidObject = getNestedObject(
          thumbnail,
          'asset.fluid'
        );

        if (videoData) {
          const { url, width, height, thumbnail } = videoData;
          const fallbackPlaceholder: FluidObject = {
            aspectRatio: 2,
            src: thumbnail || '',
            srcSet: '',
            sizes: '',
          };

          module = (
            <>
              {videoTitle && (
                <Heading type="h2" align="center" moduleHeading>
                  {videoTitle}
                </Heading>
              )}
              <Video
                url={(url && url) || ''}
                width={(width && width) || 1920}
                height={(height && height) || 1080}
                image={placeholder || fallbackPlaceholder}
              />
            </>
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

      // Image comparison group module
      case 'imageComparisonGroup':
        const {
          items: imageComparisonItems,
        } = data as SanityImageComparisonGroup;

        if (imageComparisonItems) {
          module = (
            <ImageComparisonGroup
              items={imageComparisonItems as SanityImageComparison[]}
            />
          );
        }
        break;

      // Product group module
      case 'productGroup':
        const { title, products } = data as SanityProductGroup;

        if (products) {
          module = (
            <>
              {title && (
                <Heading type="h2" align="center" moduleHeading>
                  {title}
                </Heading>
              )}
              <ProductCardGroup
                products={products as SanityProductReference[]}
              />
            </>
          );
        }
        break;

      // Image module
      case 'inlineImage':
        const { image, alt } = data as SanityInlineImage;

        const inlineImage: FluidObject | undefined = getNestedObject(
          image,
          'asset.fluid'
        );

        const inlineImageWidth = getNestedObject<string | undefined>(
          image,
          'asset.metadata.dimensions.width'
        );

        if (inlineImage && alt && inlineImageWidth) {
          module = (
            <InlineImage
              image={inlineImage}
              alt={alt}
              width={inlineImageWidth}
            />
          );
        }
        break;

      // Form module
      case 'form':
        const { type } = data as SanityForm;

        if (type === 'contact') {
          module = <ContactForm />;
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

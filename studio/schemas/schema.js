// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import product from './documents/product';
import settings from './documents/settings';
import pdf from './documents/pdf';

// Object types
import mainImage from './objects/main-image';
import hero from './objects/hero';
import featureText from './objects/feature-text';
import vimeo from './objects/vimeo';
import videoData from './objects/video-data';
import imageComparison from './objects/image-comparison';
import shopifyVariant from './objects/shopify-variant';
import productReference from './objects/product-reference';
import productGroup from './objects/product-group';
import social from './objects/social';
import navGroup from './objects/nav-group';
import pageReference from './objects/page-reference';
import inlineImage from './objects/inline-image';
import featureTextGroup from './objects/feature-text-group';
import featureTextGroupText from './objects/feature-text-group-text';
import richText from './objects/rich-text';
import form from './objects/form';
import heroButton from './objects/hero-button';
import gridList from './objects/grid-list';
import imageComparisonGroup from './objects/image-comparison-group';
import seo from './objects/seo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    mainImage,
    hero,
    featureText,
    featureTextGroup,
    featureTextGroupText,
    richText,
    vimeo,
    videoData,
    imageComparison,
    imageComparisonGroup,
    shopifyVariant,
    productReference,
    productGroup,
    social,
    navGroup,
    pageReference,
    inlineImage,
    form,
    heroButton,
    gridList,
    seo,
    // Documents
    page,
    product,
    settings,
    pdf,
  ]),
});

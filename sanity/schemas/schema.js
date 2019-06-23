// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import product from './documents/product';

// Object types
import mainImage from './objects/main-image';
import hero from './objects/hero';
import featureText from './objects/feature-text';
import vimeo from './objects/vimeo';
import videoData from './objects/video-data';
import imageComparison from './objects/image-comparison';
import shopifyVariant from './objects/shopify-variant';

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
    vimeo,
    videoData,
    imageComparison,
    shopifyVariant,
    // Documents
    page,
    product,
  ]),
});

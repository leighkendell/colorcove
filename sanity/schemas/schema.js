// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page';

// Object types
import mainImage from './objects/mainImage';
import hero from './objects/hero';
import featureText from './objects/featureText';
import video from './objects/video';

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
    video,
    // Documents
    page
  ])
})

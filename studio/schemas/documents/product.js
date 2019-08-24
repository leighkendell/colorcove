import { FiShoppingBag } from 'react-icons/fi';
import moduleGroup from '../objects/module-group';

export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: FiShoppingBag,
  fieldsets: [
    {
      title: 'Metadata',
      name: 'meta',
      description: 'Additional content for SEO purposes',
      options: { collapsible: true },
    },
    {
      title: 'Shopify Data',
      name: 'shopify',
      description: 'Content pulled in dynamically from Shopify',
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The name of the product shown in the browser and search engine listings',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL segment shown in the browser',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'A brief description of the product shown on listing pages and search engine listings',
      fieldset: 'meta',
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'mainImage',
      description:
        'An image shown on listing pages and when sharing the product on social media',
      fieldset: 'meta',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'modules',
      title: 'Modules',
      ...moduleGroup,
    },
    {
      name: 'shopifyId',
      title: 'Shopify ID',
      type: 'number',
      description: 'The product ID from Shopify',
      readOnly: true,
      fieldset: 'shopify',
    },
    {
      name: 'shopifyHandle',
      title: 'Shopify Handle',
      type: 'string',
      description: 'The product Handle from Shopify',
      readOnly: true,
      fieldset: 'shopify',
    },
    {
      name: 'shopifyDefaultVariant',
      title: 'Default Product Variant',
      type: 'shopifyVariant',
      fieldset: 'shopify',
    },
  ],
};

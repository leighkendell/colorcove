import { FiDollarSign } from 'react-icons/fi';

export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: FiDollarSign,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page shown in the browser',
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
      name: 'shopifyId',
      title: 'Shopify ID',
      type: 'number',
      description: 'The product ID from Shopify',
      readOnly: true,
    },
    {
      name: 'shopifyDefaultVariant',
      title: 'Default Product Variant',
      type: 'shopifyVariant',
    },
  ],
};

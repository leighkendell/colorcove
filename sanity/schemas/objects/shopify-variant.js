export default {
  name: 'shopifyVariant',
  type: 'object',
  description: 'Default product variant details from Shopify',
  fields: [
    {
      name: 'title',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'price',
      type: 'string',
      readOnly: true,
    },
  ],
};

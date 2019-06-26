export default {
  name: 'productReference',
  type: 'object',
  fields: [
    {
      name: 'product',
      type: 'reference',
      to: [
        {
          type: 'product',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'product.title',
      media: 'product.image.asset',
    },
  },
};

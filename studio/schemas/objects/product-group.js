export default {
  name: 'productGroup',
  title: 'Product Group',
  type: 'object',
  description: 'A group of products with optional title',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'products',
      type: 'array',
      of: [
        {
          title: 'Product',
          type: 'productReference',
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'title',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Product Group',
        subtitle,
      };
    },
  },
};

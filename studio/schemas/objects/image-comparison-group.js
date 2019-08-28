export default {
  name: 'imageComparisonGroup',
  title: 'Image Comparison Group',
  type: 'object',
  description: 'A group of image comparison modules',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'item',
          type: 'imageComparison',
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'items',
    },
    prepare(selection) {
      const { subtitle } = selection;

      return {
        title: 'Image Comparison Group',
        subtitle: subtitle && subtitle.map(item => item.name).join(', '),
      };
    },
  },
};

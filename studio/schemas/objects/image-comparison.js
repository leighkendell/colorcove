export default {
  name: 'imageComparison',
  title: 'Image Comparison',
  type: 'object',
  description: 'An image comparison slider',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the image being compared',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the image being compared',
    },
    {
      name: 'beforeImage',
      title: 'Before Image',
      type: 'mainImage',
    },
    {
      name: 'afterImage',
      title: 'After Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      subtitle: 'name',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Image Comparison',
        subtitle,
      };
    },
  },
};

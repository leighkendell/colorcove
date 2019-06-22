export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
};

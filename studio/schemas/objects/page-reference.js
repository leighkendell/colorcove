export default {
  name: 'pageReference',
  title: 'Page reference',
  type: 'object',
  fields: [
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'page.title',
      media: 'page.image.asset',
    },
  },
};

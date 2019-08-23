export default {
  name: 'vimeo',
  title: 'Vimeo Embed',
  type: 'object',
  description: 'An embedded vimeo video',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'data',
      title: 'Video Data',
      type: 'videoData',
    },
    {
      name: 'image',
      title: 'Placeholder Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      subtitle: 'data.title',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Vimeo Embed',
        subtitle,
      };
    },
  },
};

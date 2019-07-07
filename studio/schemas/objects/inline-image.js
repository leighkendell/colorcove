export default {
  name: 'inlineImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'A description of the image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      subtitle: 'alt',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Image',
        subtitle,
      };
    },
  },
};

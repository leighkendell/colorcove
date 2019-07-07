export default {
  name: 'featureTextGroupText',
  title: 'Feature Text',
  type: 'object',
  description: 'A text section with a heading and text',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Feature Text',
        subtitle,
      };
    },
  },
};

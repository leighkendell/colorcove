export default {
  name: 'gridList',
  title: 'Grid List',
  type: 'object',
  description:
    'A text section with a heading and list of items presented in a grid',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Items',
      name: 'listItems',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Grid List',
        subtitle,
      };
    },
  },
};

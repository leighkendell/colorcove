export default {
  name: 'featureTextGroup',
  title: 'Feature Text Group',
  type: 'object',
  description: 'A group of featured text modules',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [
        {
          title: 'item',
          type: 'featureTextGroupText',
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
        title: 'Feature Text Group',
        subtitle: subtitle && subtitle.map(item => item.heading).join(', '),
      };
    },
  },
};

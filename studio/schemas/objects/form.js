export default {
  name: 'form',
  type: 'object',
  title: 'Form',
  description: 'An embedded form with predefined fields',
  fields: [
    {
      name: 'type',
      type: 'string',
      options: {
        list: [{ title: 'Contact', value: 'contact' }],
      },
    },
  ],
  preview: {
    select: {
      subtitle: 'type',
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        title: 'Form',
        subtitle,
      };
    },
  },
};

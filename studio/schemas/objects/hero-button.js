export default {
  name: 'heroButton',
  type: 'object',
  title: 'Button',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'link',
      type: 'reference',
      title: 'Link',
      to: [{ type: 'page' }],
    },
  ],
};

export default {
  name: 'navGroup',
  title: 'Nav Group',
  type: 'object',
  description: 'A list of pages used for navigation',
  fields: [
    {
      name: 'pages',
      type: 'array',
      of: [
        {
          type: 'pageReference',
          title: 'Page',
        },
      ],
    },
  ],
};

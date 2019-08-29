export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description: 'Default SEO content',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'image',
      type: 'mainImage',
    },
  ],
};

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page shown in the browser',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL segment shown in the browser',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
      }
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero'
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'featureText' },
        { type: 'vimeo' }
      ],
    }
  ],
}

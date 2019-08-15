export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  description: 'The hero section at the top of the page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
    },
    {
      name: 'button',
      type: 'heroButton',
      title: 'Button',
    },
  ],
};

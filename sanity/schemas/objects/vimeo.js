export default {
  name: 'vimeo',
  title: 'Vimeo Embed',
  type: 'object',
  description: 'An embedded vimeo video',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Placeholder Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      subtitle: 'url',
    },
    prepare(selection) {
      const { subtitle } = selection
      return {
        title: 'Vimeo Embed',
        subtitle
      }
    }
  }
}

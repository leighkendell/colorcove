export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  description: 'An inline video',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'This must be the link to a Vimeo video',
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
        title: 'Video',
        subtitle
      }
    }
  }
}

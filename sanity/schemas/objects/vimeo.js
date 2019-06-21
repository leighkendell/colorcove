import VimeoInput from '../../components/vimeo-input';

export default {
  name: 'vimeo',
  title: 'Vimeo Embed',
  type: 'object',
  description: 'An embedded vimeo video',
  fields: [
    {
      name: 'videoData',
      type: 'object',
      inputComponent: VimeoInput,
      fields: [
        {
          name: 'url',
          title: 'URL',
          type: 'url',
        },
        {
          name: 'title',
          type: 'string',
          readOnly: true,
        },
        {
          name: 'width',
          type: 'number',
          readOnly: true
        },
        {
          name: 'height',
          type: 'number',
          readOnly: true
        },
        {
          name: 'thumbnail',
          type: 'url',
          readOnly: true
        }
      ]
    },
    {
      name: 'image',
      title: 'Placeholder Image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      subtitle: 'videoData.title',
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

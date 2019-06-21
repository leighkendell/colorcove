export default {
  name: 'featureText',
  title: 'Feature Text',
  type: 'object',
  description: 'A text section with a heading and text',
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      validation: Rule => Rule.required().error('Please select a layout type'),
      options: {
        list: [
          {title: 'Centered', value: 'centered'},
          {title: 'Horizontal', value: 'horizontal'},
        ],
      }
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
    },
    prepare(selection) {
      const { subtitle } = selection
      return {
        title: 'Feature Text',
        subtitle
      }
    }
  }
}

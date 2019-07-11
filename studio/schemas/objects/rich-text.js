export default {
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      subtitle: 'blocks',
    },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === 'block');
      return {
        title: 'Rich Text',
        subtitle: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : '',
      };
    },
  },
};

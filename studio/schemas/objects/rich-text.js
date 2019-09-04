import { FiExternalLink, FiLink } from 'react-icons/fi';

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
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                blockEditor: {
                  icon: FiLink,
                },
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'page' }, { type: 'product' }],
                  },
                ],
              },
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                blockEditor: {
                  icon: FiExternalLink,
                },
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'inlineImage',
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

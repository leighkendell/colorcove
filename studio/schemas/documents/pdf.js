import { FiFile } from 'react-icons/fi';
import moduleGroup from '../objects/module-group';

export default {
  name: 'pdf',
  title: 'PDF',
  type: 'document',
  icon: FiFile,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the PDF to be generated',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      readOnly: true,
    },
  ],
};

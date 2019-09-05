import { FiFile } from 'react-icons/fi';
import PdfInput from '../../components/pdf-input';

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
    // TODO: Is there a proper way to just insert a component not related to an input?
    {
      name: 'pdfButton',
      title: 'PDF Button',
      type: 'string',
      inputComponent: PdfInput,
    },
  ],
};

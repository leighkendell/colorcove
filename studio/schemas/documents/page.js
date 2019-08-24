import { FiBookOpen } from 'react-icons/fi';
import moduleGroup from '../objects/module-group';

export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: FiBookOpen,
  fieldsets: [
    {
      title: 'Metadata',
      name: 'meta',
      description: 'Additional content for SEO purposes',
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'The title of the page shown in the browser and search engine listings',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL segment shown in the browser',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'A brief description of the page, shown on search engine listings',
      fieldset: 'meta',
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'mainImage',
      description: 'An image used when sharing the page on social media',
      fieldset: 'meta',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'modules',
      title: 'Modules',
      ...moduleGroup,
    },
  ],
};

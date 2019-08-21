import VimeoInput from '../../components/vimeo-input';

export default {
  name: 'videoData',
  type: 'object',
  title: 'Video Data',
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
      readOnly: true,
    },
    {
      name: 'height',
      type: 'number',
      readOnly: true,
    },
    {
      name: 'thumbnail',
      type: 'url',
      readOnly: true,
    },
  ],
};

import S from '@sanity/desk-tool/structure-builder';
import { FiSettings } from 'react-icons/fi';

const hiddenDocTypes = listItem => !['siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .title('Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

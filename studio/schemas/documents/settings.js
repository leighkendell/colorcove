export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'primaryNav',
      title: 'Primary Navigation',
      type: 'navGroup',
    },
    {
      name: 'secondaryNav',
      title: 'Secondary Navigation',
      type: 'navGroup',
    },
    {
      name: 'social',
      title: 'Social links',
      type: 'social',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
};

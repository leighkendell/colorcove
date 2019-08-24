export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: process.env.STUDIO_API_ID,
            buildHookId: process.env.STUDIO_BUILD_ID,
            name: 'colorcove-studio',
          },
          {
            title: 'Website',
            apiId: process.env.WEB_API_ID,
            buildHookId: process.env.WEB_BUILD_ID,
            name: 'colorcove-web',
          },
        ],
      },
    },
  ],
};

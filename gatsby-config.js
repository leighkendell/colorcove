require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    primaryNav: [
      {
        title: 'Products',
        link: '/products'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Contact',
        link: '/contact'
      }
    ],
    secondaryNav: [
      {
        title: 'Support',
        link: '/support'
      },
      {
        title: 'Contact',
        link: '/contact'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/colorcove-logo.png`,
      },
    },
    `gatsby-plugin-svgr`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: 'colorcove',
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        schemas: {
          home: require('./src/schemas/home.json'),
          product: require('./src/schemas/product.json'),
        }
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `${process.env.SANITY_PROJECT}`,
        dataset: `${process.env.SANITY_DATASET}`,
        token: `${process.env.SANITY_TOKEN}`,
        watchMode: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

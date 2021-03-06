require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';
const siteUrl = `https://colorcove.co`;

module.exports = {
  siteMetadata: {
    title: `Colorcove`,
    // TODO: Default description
    description: ``,
    author: `@colorcove`,
    siteUrl,
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Colorcove`,
        short_name: `Colorcove`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/colorcove-logo.png`,
      },
    },
    `gatsby-plugin-svgr`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `${process.env.SANITY_PROJECT}`,
        dataset: `${process.env.SANITY_DATASET}`,
        token: `${process.env.SANITY_TOKEN}`,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `colorcove`,
        accessToken: `${process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN}`,
        includeCollections: [`shop`],
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/render-pdf`],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};

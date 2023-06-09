const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteTitle: "Dare Dollz",
    siteTitleDefault: "Dare Dollz by @dariusxmoreno and @daremoreno",
    siteUrl: "https://daredollz.com",
    siteDescription:
      " A Doll company and clothing line created by Darius and Dare Moreno",
    siteImage: "/newlogo.png",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ahava7ytbjix`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
        password: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        // shopifyConnections: ["collections"],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://daredollz.us14.list-manage.com/subscribe/post?u=fc6f1676f1d8445f434bc6d5f&amp;id=e9dc7ef6d7&amp;f_id=009991e0f0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}

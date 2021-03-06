module.exports = {
  siteMetadata: {
    title: `Joy`,
    description: `Website for the project Joy`,
    author: `@krustyc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "initial-overlay-portal",
        id: "initial-overlay-portal",
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "cookie-banner-portal",
        id: "cookie-banner-portal",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169339487-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joy`,
        short_name: `joy`,
        start_url: `/`,
        background_color: `#9D8DF1`,
        theme_color: `#9D8DF1`,
        display: `minimal-ui`,
        icon: `src/images/tab-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

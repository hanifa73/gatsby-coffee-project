
// Initialize dotenv
require('dotenv').config({
    path: `.env`,            
    //  .env.${process.env.NODE_ENV}`,
});
// const config = require('gatsby-plugin-config').default;
// const contentful = require('coffee 1');

// And then you can use the config in gatsby-config.js
// const config = require('gatsby-plugin-config');
// let activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV 

module.exports = {
  siteMetadata: {
    title: `hanifa coffee`,
    description: ` coffee project with this default starter.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  
    {
      resolve: `gatsby-source-contentful`,
      options: {
       
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    // environment: process.env.CONTENTFUL_ENVIRONMENT,
       
    },
  },
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
        apiKey: process.env.SNIPCART_API,
        autopop:true,
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
        icon: `src/images/boat.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "WhatTheWeb",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `24276309765`,
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`
  ],
};

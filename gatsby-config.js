module.exports = {
  siteMetadata: {
    title: `Wolkenträumer`,
    description: `Hallo, my name is Rodolfo Dutra. I a front-end developer from Portugal living in Leipzig. In this blog I share my projects, ideas and some pictures of clouds. `,
    author: `Rodolfo Dutra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wolkenträumer - Rodolfo Dutra`,
        short_name: `Wolkenträumer`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#fcfcfc`,
        display: `standalone`,
        icon: `src/images/cube.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}

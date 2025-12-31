/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Montserrat:300,400,500,600,700', 'Roboto:400,700'], // Specify the fonts and weights you want to use
        },
      },
    },
    // {
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     preconnect: [
    //       `https://fonts.googleapis.com`,
    //       `https://fonts.gstatic.com`,
    //     ],
    //     web: [
    //       {
    //         name: `Mukta`,
    //         file: `https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta&display=swap`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-image`,
  ],
  pathPrefix: '/byronwang.com',
};

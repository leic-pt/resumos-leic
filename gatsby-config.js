module.exports = {
  siteMetadata: {
    title: `Resumos LEIC-A`,
    shortTitle: `Resumos LEIC-A`,
    description: `Resumos das UCs de LEIC-A do IST`,
    siteUrl: 'https://resumos.leic.pt',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              backgroundColor: 'transparent',
              withWebp: true,
              showCaptions: ['title'],
              tracedSVG: true,
            },
          },
          /*{
            resolve: `gatsby-remark-image-attributes`,
            options: {
              dataAttributes: true,
            },
          },*/
          `gatsby-remark-directive`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
              macros: {
                '\\d': '\\mathop{}\\!\\mathrm d',
                '\\1': '1\\!\\!1',
                '\\Q': '\\mathbb{Q}',
                '\\car': '\\operatorname{car}',
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-table-of-contents`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Resumos LEIC-A`,
        short_name: `Resumos LEIC-A`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#00a0e4`,
        display: `standalone`,
        icon: `src/images/android-icon-192x192.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito\:300,400,500`],
        display: 'swap',
      },
    },
  ],
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
};

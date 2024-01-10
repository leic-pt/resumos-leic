// const puppeteer = require('puppeteer');

module.exports = {
  siteMetadata: {
    title: `Resumos LEIC-A`,
    shortTitle: `Resumos LEIC-A`,
    description: `Resumos das UCs de LEIC-A do IST`,
    siteUrl: 'https://resumos.leic.pt',
    sidebarSections: [
      { key: 'topLevelPage' },
      { key: 'content', name: '📝 Conteúdo' },
      { key: 'labsProg', name: '👨‍💻 Laboratórios' },
      { key: 'cheatsheets', name: '📃 Cheat Sheets' },
      { key: 'misc', name: 'Misc' },
      { key: 'exercises', name: '✏️ Exercícios' },
      { key: 'tools', name: '🛠 Ferramentas' },
      { key: 'guides', name: '📚 Guias' },
      { key: 'archive', name: '📥 Arquivo' },
    ],
    navbar: {
      siteTitle: 'Resumos LEIC-A',
      links: [
        {
          title: 'IST LEIC-A',
          href: 'https://fenix.tecnico.ulisboa.pt/cursos/leic-a',
        },
        {
          title: 'GitHub',
          href: 'https://github.com/leic-pt/resumos-leic',
        },
      ],
    },
    footer: {
      owner: {
        name: 'Diogo Correia',
        website: 'https://diogotc.com',
      },
      githubLink: 'https://github.com/leic-pt/resumos-leic',
      contributionGuideLink: 'https://docs.leic.pt',
      contributorsLink: 'https://github.com/leic-pt/resumos-leic/graphs/contributors',
      vercelLink: 'https://vercel.com/?utm_source=leic-pt&utm_campaign=oss',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-color`,
          `gatsby-remark-pre-image-data`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
              backgroundColor: 'transparent',
              withWebp: true,
              showCaptions: ['title'],
              quality: 80,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-post-image-data`,
          `gatsby-remark-directive`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
              macros: {
                '\\d': '\\mathop{}\\!\\mathrm d',
                '\\1': '1\\kern-0.25em\\text{l}',
                '\\Q': '\\mathbb{Q}',
                '\\C': '\\mathbb{C}',
                '\\car': '\\operatorname{car}',
                '\\ondiv': '\\operatorname{div}',
                '\\rot': '\\operatorname{rot}',
                '\\augmatrix':
                  '\\left[\\hspace{-5pt}\\begin{array}{#1}#2\\end{array}\\hspace{-5pt}\\right]',
                '\\lapt': '\\mathcal{L}\\left\\{#1\\right\\}', // Laplace Transfomation
                '\\smartcolor': '\\htmlClass{md-color--#1}{#2}', // Handle colors on light/dark mode
                '\\op': '\\operatorname{#1}',
                '\\indep': '\\perp \\!\\!\\! \\perp',
                '\\iid': '\\stackrel{iid}{\\sim}',
                '\\sima': '\\stackrel{a}{\\sim}',
              },
              throwOnError: false,
              trust: (context) =>
                context.command === '\\htmlClass' && /md-color--[a-zA-Z]+/.test(context.class),
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              tight: true,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              css: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
              mermaidConfig: {
                fontFamily: "Roboto, sans-serif",
              },
              prefix: "remark-mermaid",
            },
          },
          `gatsby-remark-embed-snippet`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              languageExtensions: [
                {
                  language: 'mips-asm',
                  definition: {
                    comment: {
                      pattern: /#.*$/m,
                      greedy: true,
                    },
                    string: {
                      pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                      greedy: true,
                    },
                    register: {
                      pattern:
                        /([\s\(]|^)(?:\$(?:zero|at|v[01]|a[0123]|t\d|s[01234567]|k[01]|[gsf]p|ra))\b/i,
                      lookbehind: true,
                      alias: ['variable'],
                    },
                    instruction: {
                      pattern:
                        /\b(?:addi?|sub|[ls]w|l[hb]u?|s[hb]|ll|sc|lui|andi?|ori?|nor|s[rl]l|beq|bne|slti?u?|jr?|jal)\b/i,
                      alias: ['keyword'],
                    },
                    number: {
                      pattern: /(^|[^\w-])(?:0b[01]+|0x[a-f0-9]+|-?\d+)\b/,
                      lookbehind: true,
                    },
                    label: {
                      pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
                      lookbehind: true,
                      alias: ['function'],
                    },
                    directive: {
                      pattern: /\b[A-Za-z._?$][\w.?$@~#]*\b/,
                      alias: ['property'],
                    },
                    punctuation: /[(),:]/,
                  },
                },
              ],
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
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
    `gatsby-plugin-use-dark-mode-custom`,
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '711c662a-45bd-41e0-bf82-302096490211',
        srcUrl: 'https://umami.diogotc.com/script.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: 'service-worker.js',
      },
    },
  ],
};

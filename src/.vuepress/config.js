const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Resumos LEIC-A',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    prefersTheme: 'dark',
    repo: 'diogotcorreia/resumos-leic',
    editLinks: true,
    docsDir: 'src',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'IST',
        link: 'https://tecnico.ulisboa.pt',
      },
    ],
    sidebar: {
      '/iaed/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0001-introducao-programacao-c'],
        },
        'meta/linux-setup',
      ],
      '/lp/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0001-conceitos-gerais'],
        },
      ],
      '/cdi-ii/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0001-transicao-para-dim-sup-1', '0002-norma-topologia'],
        },
      ],
      '/md/': [''],
      '/': [
        {
          title: '1º Ano 1º Semestre',
          children: [
            [
              'https://www.notion.so/diogocorreia/Fundamentos-da-Programa-o-1c51dbe37d0f4c728a343cb245c86fb4',
              'FP',
            ],
            [
              'https://www.notion.so/diogocorreia/Introdu-o-Arquitetura-de-Computadores-93a135cbbe7b46cab68fc09e5f72113d',
              'IAC',
            ],
            [
              'https://www.notion.so/diogocorreia/C-lculo-Diferencial-e-Integral-I-5e144dc9dafe4627b4bafd80ca68d5a4',
              'CDI-I',
            ],
            [
              'https://www.notion.so/diogocorreia/lgebra-Linear-6325f5b76b7f411182bcbe55406893ba',
              'AL',
            ],
            [
              'https://www.notion.so/diogocorreia/Introdu-o-Engenharia-Inform-tica-2cab5ae1a715461bbdb84c58309f982d',
              'IEI',
            ],
          ],
        },
        {
          title: '1º Ano 2º Semestre',
          collapsable: false,
          children: [
            ['iaed/', 'IAED'],
            ['lp/', 'LP'],
            ['cdi-ii/', 'CDI-II'],
            ['md/', 'MD'],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-seo',
    '@maginapp/vuepress-plugin-katex',
    [
      'vuepress-plugin-meilisearch',
      {
        hostUrl: 'https://meilisearch.diogotc.com',
        apiKey: '8d585d0aedbfb647df389fda5edf374179518dd34c141b792517262fec2228b8',
        indexUid: 'resumos-leic',
      },
    ],
    [
      require('./plugins/umami-analytics'),
      {
        websiteId: '711c662a-45bd-41e0-bf82-302096490211',
        jsUrl: 'https://umami.diogotc.com/umami.js',
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-footnote'));
    },
  },
};

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
    ['meta', { name: 'theme-color', content: '#00a0e4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/android-icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
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
          children: [
            '0001-introducao-programacao-c',
            '0002-estruturas-controlo',
            '0003-input-output',
            '0004-tabelas',
            '0005-ficheiros',
            '0006-estruturas',
          ],
        },
        {
          title: '👨‍💻 Laboratórios',
          collapsable: false,
          children: ['labs/lab02/', 'labs/lab03/', 'labs/lab04/'],
        },
        'meta/linux-setup',
      ],
      '/lp/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: [
            '0001-conceitos-gerais',
            '0002-logica-proposicional-int',
            '0003-logica-proposicional-sc',
            '0004-logica-primeiraordem-int',
            '0005-logica-primeiraordem-sc',
            '0006-prog-logica',
          ],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['exercicios/fichas-aulas-praticas'],
        },
      ],
      '/cdi-ii/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: [
            '0001-transicao-para-dim-sup-1',
            '0002-norma-topologia',
            '0003-funcoes-continuidade',
            '0004-diferenciabilidade',
            '0005-derivada-composta',
            '0006-conjunto-de-nivel',
          ],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['exercicios/fichas-aulas-praticas'],
        },
      ],
      '/md/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: [
            '0001-perturbacoes',
            '0002-introducao-calculo-finito',
            '0003-formulas-fechadas-somatorios',
            '0004-serie-harmonica',
            '0005-inducao-matematica',
            '0006-formula-de-abel',
            '0007-funcoesgeradoras',
            '0008-teonewton',
            '0009-combinatorio',
            '0010-diffinitas',
          ],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['exercicios/fichas-aulas-praticas'],
        },
        {
          title: '📃 Cheat Sheets',
          collapsable: false,
          children: ['1000-geradoras-sheet'],
        },
      ],
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
        apiKey: 'c2972e080f75e3d6891861c6a06ab5e335ccf16c395dcba2322eab5027cba783',
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
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-footnote'));
    },
  },
};

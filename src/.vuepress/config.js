const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Resumos LEIC-A",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: "default-prefers-color-scheme",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    prefersTheme: "dark",
    repo: "diogotcorreia/resumos-leic",
    editLinks: true,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: "IST",
        link: "https://tecnico.ulisboa.pt",
      },
    ],
    sidebar: {
      "/iaed/": [
        "",
        {
          title: "Conteúdo",
          collapsable: false,
          children: ["0001-introducao"],
        },
        "meta/linux-setup",
      ],
      "/": [
        {
          title: "1º Ano 2º Semestre",
          collapsable: false,
          children: ["iaed/"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-seo",
  ],
};

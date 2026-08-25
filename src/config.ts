export const siteConfig = {
  title: 'Resumos LEIC-A',
  shortTitle: 'Resumos LEIC-A',
  description: 'Resumos das UCs de LEIC-A do IST',
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
  github: {
    owner: 'leic-pt',
    repository: 'resumos-leic',
  },
  navbar: {
    siteTitle: 'Resumos LEIC-A',
    links: [
      { title: 'IST LEIC-A', href: 'https://fenix.tecnico.ulisboa.pt/cursos/leic-a' },
      { title: 'GitHub', href: 'https://github.com/leic-pt/resumos-leic' },
    ],
  },
  footer: {
    owner: { name: 'Diogo Correia', website: 'https://diogotc.com' },
    githubLink: 'https://github.com/leic-pt/resumos-leic',
    contributionGuideLink: 'https://docs.leic.pt',
    contributorsLink: 'https://github.com/leic-pt/resumos-leic/graphs/contributors',
  },
  search: {
    host: 'https://meilisearch.diogotc.com',
    apiKey: 'a66ec2f3c48d2f827a81e850de53d2a764b5d5f420111e15c686eec6885480f5',
    indexName: 'resumos-leic',
  },
  umami: {
    websiteId: '711c662a-45bd-41e0-bf82-302096490211',
    srcUrl: 'https://umami.diogotc.com/script.js',
  },
} as const;

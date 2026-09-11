export const siteConfig = {
  title: 'Resumos LEIC-A',
  description: 'Resumos das UCs de LEIC-A do IST',
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

export interface Year {
  readonly name: string;
  readonly semesters: Semester[];
}

export interface Semester {
  readonly name?: string;
  readonly courses: Course[];
}

export interface Course {
  readonly name: string;
  readonly description: string;
  readonly link: string;
  readonly image: string;
  readonly color: `#${string}`;
  readonly long?: boolean;
}

export const years: Year[] = [
  {
    name: '1º Ano',
    semesters: [
      {
        name: '1º Semestre',
        courses: [
          {
            name: 'CDI-I',
            description: 'S1',
            link: '/cdi-i',
            image: 'assets/cdi1.svg',
            color: '#1976d2',
          },
          {
            name: 'AL',
            description: 'S1',
            link: '/al',
            image: 'assets/al.svg',
            color: '#303f9f',
          },
          {
            name: 'FP',
            description: 'P1',
            link: '/fp',
            image: 'assets/fp.svg',
            color: '#d32f2f',
          },
          {
            name: 'LP',
            description: 'P2',
            link: '/lp',
            image: 'assets/lp.svg',
            color: '#33691e',
          },
          {
            name: 'IEI',
            description: 'P1',
            link: '/iei',
            image: 'assets/iei.svg',
            color: '#f57f17',
          },
          {
            name: 'Gestão',
            description: 'P2',
            link: '/ges',
            image: 'assets/ges.svg',
            color: '#00695c',
          },
        ],
      },
      {
        name: '2º Semestre',
        courses: [
          {
            name: 'CDI-II',
            description: 'S2',
            link: '/cdi-ii',
            image: 'assets/cdi2.svg',
            color: '#1565c0',
            long: true,
          },
          {
            name: 'IAED',
            description: 'P3',
            link: '/iaed',
            image: 'assets/iaed.svg',
            color: '#c62828',
          },
          {
            name: 'IAC',
            description: 'P4',
            link: '/iac',
            image: 'assets/iac.svg',
            color: '#ff6f00',
          },
          {
            name: 'Física I',
            description: 'P3',
            link: '/fis-i',
            image: 'assets/fis1.svg',
            color: '#00695c',
          },
          {
            name: 'EMD',
            description: 'P4',
            link: '/emd',
            image: 'assets/md.svg',
            color: '#283593',
          },
        ],
      },
    ],
  },
  {
    name: '2º Ano',
    semesters: [
      {
        name: '1º Semestre',
        courses: [
          {
            name: 'CDI-III',
            description: 'S1',
            link: '/cdi-iii',
            image: 'assets/cdi3.svg',
            color: '#0d47a1',
            long: true,
          },
          {
            name: 'PO',
            description: 'P1',
            link: '/po',
            image: 'assets/po.svg',
            color: '#b71c1c',
          },
          {
            name: 'SO',
            description: 'P2',
            link: '/so',
            image: 'assets/so.svg',
            color: '#f57f17',
          },
          {
            name: 'Física II',
            description: 'P1',
            link: '/fis-ii',
            image: 'assets/fis2.svg',
            color: '#004d40',
          },
          {
            name: 'ASA',
            description: 'P2',
            link: '/asa',
            image: 'assets/asa.svg',
            color: '#33691e',
          },
        ],
      },
      {
        name: '2º Semestre',
        courses: [
          {
            name: 'PE',
            description: 'S2',
            link: '/pe',
            image: 'assets/pe.svg',
            color: '#9c27b0',
            long: true,
          },
          {
            name: 'TC',
            description: 'P3',
            link: '/tc',
            image: 'assets/tc.svg',
            color: '#e53935',
          },
          {
            name: 'BD',
            description: 'P4',
            link: '/bd',
            image: 'assets/bd.svg',
            color: '#757575',
          },
          {
            name: 'IPM',
            description: 'P3',
            link: '/ipm',
            image: 'assets/ipm.svg',
            color: '#2e7d32',
          },
          {
            name: 'IA',
            description: 'P4',
            link: '/ia',
            image: 'assets/ia.svg',
            color: '#3f51b5',
          },
        ],
      },
    ],
  },
  {
    name: '3º Ano',
    semesters: [
      {
        name: '1º Semestre',
        courses: [
          {
            name: 'OC',
            description: 'P1',
            link: '/oc',
            image: 'assets/oc.svg',
            color: '#e65100',
          },
          {
            name: 'AMS',
            description: 'P2',
            link: '/ams',
            image: 'assets/ams.svg',
            color: '#ff5252',
          },
          {
            name: 'Apre',
            description: 'P1',
            link: '/apre',
            image: 'assets/apre.svg',
            color: '#534bae',
          },
          {
            name: 'RC',
            description: 'P2',
            link: '/rc',
            image: 'assets/rc.svg',
            color: '#524c00',
          },
        ],
      },
      {
        name: '2º Semestre',
        courses: [
          {
            name: 'SD',
            description: 'P3',
            link: '/sd',
            image: 'assets/sd.svg',
            color: '#827717',
          },
          {
            name: 'Comp',
            description: 'P4',
            link: '/comp',
            image: 'assets/comp.svg',
            color: '#c50e29',
          },
          {
            name: 'ES',
            description: 'P3',
            link: '/es',
            image: 'assets/es.svg',
            color: '#c56000',
          },
          {
            name: 'CG',
            description: 'P4',
            link: '/cg',
            image: 'assets/cg.svg',
            color: '#3f51b5',
          },
        ],
      },
    ],
  },
  {
    name: 'HACS',
    semesters: [
      {
        courses: [
          {
            name: 'IEco',
            description: 'P1/P2',
            link: '/ieco',
            image: 'assets/ieco.svg',
            color: '#00766c',
          },
          {
            name: 'DER',
            description: 'P1',
            link: '/der',
            image: 'assets/der.svg',
            color: '#b61827',
          },
        ],
      },
    ],
  },
];

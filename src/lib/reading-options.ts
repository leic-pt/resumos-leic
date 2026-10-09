export interface FontOption {
  cssFamily: string;
  url?: string;
  displayName: string;
}

export const fonts: Record<string, FontOption> = {
  roboto: {
    cssFamily: 'Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    displayName: 'Roboto (default)',
  },
  comicNeue: {
    cssFamily: 'Comic Neue, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap',
    displayName: 'Comic Neue',
  },
  indieFlower: {
    cssFamily: 'Indie Flower, cursive',
    url: 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
    displayName: 'Indie Flower',
  },
  nunito: {
    cssFamily: 'Nunito, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
    displayName: 'Nunito',
  },
  openDyslexic: {
    cssFamily: 'OpenDyslexicRegular, Roboto, sans-serif',
    url: 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.min.css',
    displayName: 'OpenDyslexic',
  },
  openSans: {
    cssFamily: 'Open Sans, Roboto, sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
    displayName: 'Open Sans',
  },
  cursive: {
    cssFamily: 'cursive',
    displayName: 'cursive (system)',
  },
  monospace: {
    cssFamily: 'monospace',
    displayName: 'monospace (system)',
  },
  sansSerif: {
    cssFamily: 'sans-serif',
    displayName: 'sans-serif (system)',
  },
  serif: {
    cssFamily: 'serif',
    displayName: 'serif (system)',
  },
};

export const readingStorageKeys = {
  customFont: 'customFont',
  contentWidth: 'contentWidth',
  textAlign: 'textAlign',
  themeName: 'themeName',
  darkMode: 'darkMode',
} as const;

export const readingDefaults = {
  customFont: 'roboto',
  contentWidth: 'compact',
  textAlign: 'left',
  themeName: 'default',
  darkMode: null,
} as const;

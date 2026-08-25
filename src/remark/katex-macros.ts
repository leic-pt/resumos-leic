/**
 * KaTeX macros used across the content, ported verbatim from the Gatsby
 * configuration.
 */
export const katexMacros: Record<string, string> = {
  '\\d': '\\mathop{}\\!\\mathrm d',
  '\\1': '1\\kern-0.25em\\text{l}',
  '\\Q': '\\mathbb{Q}',
  '\\C': '\\mathbb{C}',
  '\\car': '\\operatorname{car}',
  '\\ondiv': '\\operatorname{div}',
  '\\rot': '\\operatorname{rot}',
  '\\augmatrix': '\\left[\\hspace{-5pt}\\begin{array}{#1}#2\\end{array}\\hspace{-5pt}\\right]',
  '\\lapt': '\\mathcal{L}\\left\\{#1\\right\\}', // Laplace Transformation
  '\\smartcolor': '\\htmlClass{md-color--#1}{#2}', // Handle colors on light/dark mode
  '\\op': '\\operatorname{#1}',
  '\\indep': '\\perp \\!\\!\\! \\perp',
  '\\iid': '\\stackrel{iid}{\\sim}',
  '\\sima': '\\stackrel{a}{\\sim}',
};

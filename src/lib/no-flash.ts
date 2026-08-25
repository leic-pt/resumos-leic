/**
 * Pre-hydration dark mode script, ported verbatim from
 * `gatsby-plugin-use-dark-mode-custom`. Runs before first paint to avoid a
 * flash of the wrong theme.
 */
export const noFlashScript = `
(function(classNameDark, classNameLight, storageKey) {
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight);
    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  if (localStorageExists) {
    setClassOnDocumentBody(localStorageTheme ?? (supportsColorSchemeQuery && mql.matches));
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody(mql.matches);
  }
})('dark-mode', 'light-mode', 'darkMode');
`;

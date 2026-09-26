import { fonts, readingDefaults, readingStorageKeys } from './reading-options';

const serializedFonts = JSON.stringify(fonts);
const serializedStorageKeys = JSON.stringify(readingStorageKeys);
const serializedDefaults = JSON.stringify(readingDefaults);

/**
 * Pre-hydration reading options script. Runs before first paint to avoid a
 * flash of the wrong reading settings.
 */
export const noFlashScript = `
(function(fontOptions, storageKeys, defaults) {
  var body = document.body;

  function readSetting(key, fallback) {
    try {
      var value = window.localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (err) {
      return fallback;
    }
  }

  var customFont = readSetting(storageKeys.customFont, defaults.customFont);
  var contentWidth = readSetting(storageKeys.contentWidth, defaults.contentWidth);
  var textAlign = readSetting(storageKeys.textAlign, defaults.textAlign);
  var themeName = readSetting(storageKeys.themeName, defaults.themeName);
  var darkMode = readSetting(storageKeys.darkMode, defaults.darkMode);

  var selectedFont =
    typeof customFont === 'string' &&
    Object.prototype.hasOwnProperty.call(fontOptions, customFont)
      ? fontOptions[customFont]
      : fontOptions.roboto;

  body.style.fontFamily = selectedFont.cssFamily;

  var selectedFontStylesheet = document.getElementById('selected-font-stylesheet');
  if (selectedFontStylesheet) {
    if (selectedFont.url) {
      selectedFontStylesheet.setAttribute('href', selectedFont.url);
    } else {
      selectedFontStylesheet.removeAttribute('href');
    }
  }

  if (contentWidth === 'full') {
    body.classList.add('full-width');
  } else {
    body.classList.remove('full-width');
  }

  if (textAlign === 'justify') {
    body.classList.add('text-justify');
  } else {
    body.classList.remove('text-justify');
  }

  for (var classIndex = body.classList.length - 1; classIndex >= 0; classIndex -= 1) {
    var className = body.classList[classIndex];
    if (className.indexOf('theme-') === 0) {
      body.classList.remove(className);
    }
  }

  if (typeof themeName !== 'string' || !/^[A-Za-z0-9_-]+$/.test(themeName)) {
    themeName = defaults.themeName;
  }
  body.classList.add('theme-' + themeName);

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mediaQueryMatches = false;
  try {
    if (typeof window.matchMedia === 'function') {
      mediaQueryMatches = window.matchMedia(preferDarkQuery).matches;
    }
  } catch (err) {}

  var shouldUseDarkMode = typeof darkMode === 'boolean' ? darkMode : mediaQueryMatches;
  body.classList.add(shouldUseDarkMode ? 'dark-mode' : 'light-mode');
  body.classList.remove(shouldUseDarkMode ? 'light-mode' : 'dark-mode');
})(${serializedFonts}, ${serializedStorageKeys}, ${serializedDefaults});
`;

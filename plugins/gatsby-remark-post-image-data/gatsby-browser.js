const swapAlreadyLoadedObjects = () => {
  document.querySelectorAll(`object[type="image/svg+xml"]`).forEach(swapObjectByInlineSvg);
};

/**
 * Chromium did not want to correctly load MathJax inside the draw.io SVGs
 * when they were wrapped in an <object> tag.
 * This function takes an <object> element, gets its content and places the SVG inline,
 * avoiding the <object> tag.
 */
const swapObjectByInlineSvg = async (el) => {
  let svgElement = el.contentDocument?.querySelector('svg');
  if (!svgElement) {
    // Don't do anything if there is no SVG element
    return;
  }

  const svgSource = svgElement.outerHTML;

  let divWrapper = document.createElement('div');
  divWrapper.innerHTML = svgSource;

  // Copy attributes from old element to new
  el.getAttributeNames()
    .filter((attr) => ['data', 'type', 'onload'].indexOf(attr) === -1) // remove stale attributes
    .forEach((attr) => {
      divWrapper.setAttribute(attr, el.getAttribute(attr));
    });

  divWrapper.classList.add('object-svg-inline');

  el.parentElement.insertBefore(divWrapper, el);
  el.parentElement.removeChild(el);
};

document.addEventListener('DOMContentLoaded', swapAlreadyLoadedObjects);
swapAlreadyLoadedObjects();
window.swapObjectByInlineSvg = swapObjectByInlineSvg;

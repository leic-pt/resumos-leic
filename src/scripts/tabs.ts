/**
 * Tab-group switching, ported from the legacy
 * `gatsby-remark-directive`'s gatsby-browser.js: clicking a `.tab-group--btn`
 * activates its `.tab-group--tab` and deactivates the others.
 */
const activeButtonClass = 'tab-group--btn__active';
const activePanelClass = 'tab-group--tab__active';

const ownedElements = <T extends Element>(tabGroup: HTMLElement, selector: string): T[] =>
  [...tabGroup.querySelectorAll<T>(selector)].filter(
    (element) => element.closest('.tab-group') === tabGroup
  );

document.querySelectorAll<HTMLElement>('.tab-group').forEach((tabGroup) => {
  const tabButtons = ownedElements<HTMLButtonElement>(tabGroup, '.tab-group--btn');
  const tabContents = ownedElements<HTMLElement>(tabGroup, '.tab-group--tab');

  const activateTab = (activeIndex: number): void => {
    if (activeIndex < 0 || activeIndex >= tabButtons.length) return;

    tabButtons.forEach((button, i) => {
      const active = i === activeIndex;
      button.classList.toggle(activeButtonClass, active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });

    tabContents.forEach((content, i) => {
      const active = i === activeIndex;
      content.classList.toggle(activePanelClass, active);
      content.hidden = !active;
    });
  };

  activateTab(0);

  tabButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      activateTab(i);
    });

    button.addEventListener('keydown', (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      let nextIndex: number | undefined;
      if (event.key === 'ArrowRight') {
        nextIndex = (i + 1) % tabButtons.length;
      } else if (event.key === 'ArrowLeft') {
        nextIndex = (i - 1 + tabButtons.length) % tabButtons.length;
      } else if (event.key === 'Home') {
        nextIndex = 0;
      } else if (event.key === 'End') {
        nextIndex = tabButtons.length - 1;
      }

      if (nextIndex === undefined) return;

      event.preventDefault();
      activateTab(nextIndex);
      tabButtons[nextIndex]?.focus();
    });
  });
});

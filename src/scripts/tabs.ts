/**
 * Tab-group switching, ported from the legacy
 * `gatsby-remark-directive`'s gatsby-browser.js: clicking a `.tab-group--btn`
 * activates its `.tab-group--tab` and deactivates the others.
 */
document.querySelectorAll<HTMLElement>('.tab-group').forEach((tabGroup) => {
  const tabButtons = [...tabGroup.querySelectorAll<HTMLButtonElement>('.tab-group--btn')];
  const tabContents = [...tabGroup.querySelectorAll<HTMLElement>('.tab-group--tab')];

  tabButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      tabButtons.forEach((btn) => btn.classList.remove('tab-group--btn__active'));
      tabContents.forEach((content) => content.classList.remove('tab-group--tab__active'));

      button.classList.add('tab-group--btn__active');
      tabContents[i]?.classList.add('tab-group--tab__active');
    });
  });
});

/**
 * Vanilla progressive-enhancement for the sidebar: the button toggles the
 * `sidebar-open` class on the page container and the mask closes it.
 */
const container = document.querySelector<HTMLElement>('.page-container');
const button = document.querySelector<HTMLButtonElement>('.sidebar-button');
const mask = document.querySelector<HTMLElement>('.sidebar-mask');

button?.addEventListener('click', () => container?.classList.toggle('sidebar-open'));
mask?.addEventListener('click', () => container?.classList.remove('sidebar-open'));

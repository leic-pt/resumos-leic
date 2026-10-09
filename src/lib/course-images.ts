const courseImages = import.meta.glob('../../content/assets/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

/**
 * Resolve a course icon referenced from the homepage
 * (e.g. `assets/cdi1.svg`, relative to `content/index.md`) to its bundled
 * asset URL.
 */
export function resolveCourseImage(image?: string): string | undefined {
  if (!image) return undefined;
  return courseImages[`../../content/${image}`];
}

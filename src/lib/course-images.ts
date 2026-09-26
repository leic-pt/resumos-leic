const courseImages = import.meta.glob('../../content/assets/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

/**
 * Resolve a course icon referenced from the homepage frontmatter
 * (e.g. `assets/cdi1.svg`, relative to `content/index.md`) to its bundled
 * asset URL.
 */
export function resolveCourseImage(image?: string): string | undefined {
  if (!image) return undefined;
  const name = image.replace(/^assets\//, '');
  return courseImages[`../../content/assets/${name}`];
}

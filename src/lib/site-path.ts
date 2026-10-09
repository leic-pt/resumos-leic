const SUFFIX_START = /[?#]/;

/**
 * Add a trailing slash to internal, extensionless absolute paths.
 *
 * URL suffixes are kept separate so queries and fragments remain unchanged.
 */
export function withTrailingSlash(href: string): string {
  const suffixIndex = href.search(SUFFIX_START);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);

  if (
    !pathname.startsWith('/') ||
    pathname === '/' ||
    pathname.startsWith('//') ||
    pathname.endsWith('/') ||
    pathname.slice(pathname.lastIndexOf('/') + 1).includes('.')
  ) {
    return href;
  }

  const suffix = suffixIndex === -1 ? '' : href.slice(suffixIndex);
  return `${pathname}/${suffix}`;
}

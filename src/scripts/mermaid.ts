// Mermaid is a ~1MB dependency: only load it on pages that actually contain
// diagrams. The specifier is a static literal; the dynamic import code-splits
// the chunk so pages without `.mermaid` elements never fetch it.
void (async () => {
  if (document.querySelector('.mermaid')) {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({ startOnLoad: false });
    mermaid.run();
  }
})();

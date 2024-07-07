import React from 'react';
import mermaid from 'mermaid';

export function useMermaid() {
  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
    });
    mermaid.run();
  }, []);
}

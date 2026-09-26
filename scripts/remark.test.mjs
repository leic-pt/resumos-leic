import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadConfigFromFile } from 'vite';

const { config } = await loadConfigFromFile(
  { command: 'build', mode: 'production' },
  resolve('astro.config.ts')
);
const processor = await config.markdown.processor.createRenderer(config.markdown);
const render = (markdown) =>
  processor.render(markdown, {
    fileURL: pathToFileURL(resolve('content/oc/renderer-test.md')),
  });

test('public heading fragments and TOC links use the same legacy identities', async () => {
  const headings =
    '## <abbr>CPU</abbr>\n\n## [API](https://example.com "Reference")\n\n## <abbr>CPU</abbr>\n\n## [API](https://example.com "!!!")\n\n## [API](https://example.com "!!!")';
  for (const withToc of [false, true]) {
    const { code, metadata } = await render(
      (withToc ? '\x60\x60\x60toc\n\x60\x60\x60\n\n' : '') + headings
    );
    assert.deepEqual(
      metadata.headings.map(({ slug }) => slug),
      ['abbrcpuabbr', 'reference', 'abbrcpuabbr-1', 'api', 'api-1']
    );
    if (withToc) {
      const toc = code.slice(0, code.indexOf('<h2'));
      assert.deepEqual(
        [...toc.matchAll(/href="(#[^"]+)"/g)].map((match) => match[1]),
        ['#abbrcpuabbr', '#reference', '#abbrcpuabbr-1', '#api', '#api-1']
      );
    }
  }
});

test('TOC labels retain numeric prose after directive resolution', async () => {
  const { code, metadata } = await render('\x60\x60\x60toc\n\x60\x60\x60\n\n## Clock 10:54:23.674');
  assert.deepEqual(
    metadata.headings.map(({ slug }) => slug),
    ['clock-105423674']
  );
  assert.match(code.slice(0, code.indexOf('<h2')), /Clock 10:54:23\.674/);
});

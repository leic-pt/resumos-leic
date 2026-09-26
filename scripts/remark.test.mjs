import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { remarkEmbedSnippet } from '../src/remark/embed-snippet.ts';
import { join, resolve } from 'node:path';
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

test('named snippets stop at literal markers without dropping authored blank lines', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'resumos-snippet-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  writeFileSync(
    join(directory, 'example.ts'),
    '// start-snippet{part.one}\r\nconst kept = 1;\r\n\r\n// end-snippet{part.one}\r\nconst excluded = 2;'
  );
  const node = { type: 'inlineCode', value: 'embed:example.ts{snippet: "part.one"}' };
  remarkEmbedSnippet()(
    { type: 'root', children: [{ type: 'paragraph', children: [node] }] },
    {
      dirname: directory,
      fail(message) {
        throw new Error(message);
      },
    }
  );
  assert.equal(node.value, 'const kept = 1;\r\n');
});

test('TOC labels retain numeric prose after directive resolution', async () => {
  const { code, metadata } = await render('\x60\x60\x60toc\n\x60\x60\x60\n\n## Clock 10:54:23.674');
  assert.deepEqual(
    metadata.headings.map(({ slug }) => slug),
    ['clock-105423674']
  );
  assert.match(code.slice(0, code.indexOf('<h2')), /Clock 10:54:23\.674/);
});

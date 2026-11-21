// SEO/GEO checks on the static export. Run after `npm run build`: node scripts/seo-check.mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const SLUGS = ['civitasly', 'medusa', 'urbanify', 'ipcatole', 'beecorder', 'fio', 'montei', 'mimir', 'galerie', 'agoraaqui', 'sales-factory'];
const meta = (h, p) => h.match(new RegExp(`<meta property="${p}" content="([^"]*)"`))?.[1];
for (const slug of SLUGS) for (const [file, locale] of [[`out/${slug}.html`, 'en_US'], [`out/pt/${slug}.html`, 'pt_BR']]) {
  const h = readFileSync(file, 'utf8');
  const d = h.match(/<meta name="description" content="([^"]*)"/)[1];
  assert.ok(d.length <= 160, `${file}: description ${d.length}`);
  assert.equal(meta(h, 'og:locale'), locale, `${file}: og:locale`);
  assert.equal(meta(h, 'og:type'), 'article', `${file}: og:type`);
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const graph = blocks.flatMap((b) => b['@graph'] ?? [b]);
  const art = graph.find((n) => n['@type'] === 'Article');
  assert.ok(art, `${file}: Article JSON-LD`);
  assert.equal(art.author['@id'], 'https://iam.linearcraft.dev/#person', file);
  assert.ok(graph.some((n) => n['@type'] === 'BreadcrumbList'), `${file}: BreadcrumbList`);
}
const llms = readFileSync('out/llms.txt', 'utf8');
for (const slug of SLUGS) assert.ok(llms.includes(`https://iam.linearcraft.dev/${slug})`), `llms.txt: ${slug}`);
console.log(`seo-check: ${SLUGS.length * 2} case pages and llms.txt ok`);

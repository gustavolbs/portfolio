// After the static export: JSON-LD (Article + BreadcrumbList) on every case page, and out/llms.txt built from those pages.
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'https://iam.linearcraft.dev';
const PERSON = `${BASE}/#person`;
// Case slug -> [product name, product site or null]. Order = order in llms.txt.
const CASES = {
  civitasly: ['Civitasly', 'https://civitasly.com'], medusa: ['Medusa', 'https://medusa.linearcraft.dev/'],
  urbanify: ['Urbanify', 'https://urbanify.com.br'], ipcatole: ['IP Catolé', null],
  beecorder: ['Beecorder', 'https://beecorder.linearcraft.dev/'], fio: ['Fio', 'https://fio.linearcraft.dev/'],
  montei: ['Montei', 'https://montei.linearcraft.dev/'], mimir: ['Mimir', 'https://mimir.linearcraft.dev/'],
  galerie: ['Galerie', 'https://galerie.linearcraft.dev/'], agoraaqui: ['agoraaqui', 'https://agoraaqui.com.br'],
  'sales-factory': ['Sales Factory', null],
};
const unescape = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const pick = (h, re, f) => { const m = h.match(re); if (!m) throw new Error(`seo: ${re} missing in ${f}`); return unescape(m[1]); };

const read = (slug, pt) => {
  const f = pt ? `out/pt/${slug}.html` : `out/${slug}.html`;
  const h = readFileSync(f, 'utf8');
  const page = {
    f, h, url: `${BASE}${pt ? '/pt' : ''}/${slug}`, lang: pt ? 'pt-BR' : 'en',
    title: pick(h, /<title>([^<]*?)(?: · Gustavo Bispo)?<\/title>/, f),
    desc: pick(h, /<meta name="description" content="([^"]*)"/, f),
    image: pick(h, /<meta property="og:image" content="([^"]*)"/, f),
  };
  return page;
};

const ld = (slug, p, pt) => {
  const [name, site] = CASES[slug];
  const home = pt ? `${BASE}/pt` : `${BASE}/`;
  const graph = [
    {
      '@type': 'Article', '@id': `${p.url}#article`, headline: p.title, description: p.desc, url: p.url,
      inLanguage: p.lang, image: p.image, author: { '@id': PERSON }, publisher: { '@id': PERSON },
      about: site ? { '@type': 'SoftwareApplication', name, url: site } : { '@type': 'Thing', name },
    },
    {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Gustavo Bispo', item: home },
        { '@type': 'ListItem', position: 2, name, item: p.url },
      ],
    },
    { '@type': 'Person', '@id': PERSON, name: 'Gustavo Bispo', url: BASE },
  ];
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
};

const en = {};
for (const slug of Object.keys(CASES)) for (const pt of [false, true]) {
  const p = read(slug, pt);
  if (!pt) en[slug] = p;
  if (p.h.includes('"@type":"Article"')) continue; // already injected (re-run)
  writeFileSync(p.f, p.h.replace('</head>', `${ld(slug, p, pt)}</head>`));
}

writeFileSync('out/llms.txt', `# Gustavo Bispo

> Senior Frontend, Product & Forward Deployed Engineer, 6+ years with React, TypeScript and Next.js. Founder of Linear Craft Technology, São Paulo, Brazil (UTC-3). Designs, builds and ships products end to end: research, design, code, store release.

## Pages
- [Home](${BASE}/): profile, focus areas, selected work and the app lab. [Português](${BASE}/pt).

## Case studies
${Object.keys(CASES).map((s) => `- [${CASES[s][0]}](${BASE}/${s}): ${en[s].desc} [Português](${BASE}/pt/${s}).`).join('\n')}

## Elsewhere
- [Linear Craft Technology](https://www.linearcraft.dev): the company he founded; product engineering from problem to production.
- [GitHub](https://github.com/gustavolbs)
- [LinkedIn](https://www.linkedin.com/in/gbispo-santos)
`);
console.log(`seo: ${Object.keys(CASES).length * 2} case pages, llms.txt`);

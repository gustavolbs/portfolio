// The root layout renders <html lang="en"> for every page; Portuguese pages (/pt, /pt/*) get pt-BR after the static export.
// shortcut: client-side navigation between EN and PT keeps the first page's lang; move PT to its own root layout if that matters.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
const walk = (dir) => { for (const e of readdirSync(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) walk(p); else if (p.endsWith('.html')) files.push(p); } };
if (existsSync('out/pt.html')) files.push('out/pt.html');
if (existsSync('out/pt')) walk('out/pt');
let bad = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8').replace('<html lang="en"', '<html lang="pt-BR"');
  writeFileSync(f, html);
  if (!html.includes('<html lang="pt-BR"')) { console.error(`lang-pt: no <html lang> in ${f}`); bad++; }
}
if (!files.length || bad) process.exit(1);
console.log(`lang-pt: ${files.length} pages set to pt-BR`);

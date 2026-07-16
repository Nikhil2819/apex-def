// Forbidden-strings legal check — roadmap.md principle 5 / task 2.11.
// Scans built HTML in dist/ for banned branding, pricing and e-commerce language.
// Allowed "AdBlue" contexts (content.md §1 terminology rules): the VDA trademark
// footnote (every page) and the Knowledge FAQ's educational answer. Everything else fails.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));

const ALLOWED_ADBLUE_PATTERNS = [
  /AdBlue® is a registered trademark of Verband der Automobilindustrie e\.V\. \(VDA\)\. APEX D\.E\.F is an independent Indian brand and is not affiliated with, licensed by, or endorsed by VDA\./g,
  /AdBlue® is a brand name — a trademark of the German automotive association VDA, licensed only to audited producers\./g,
  /do not sell under the AdBlue name/g,
  /Is DEF the same thing as AdBlue\?/g,
];

const FORBIDDEN = [
  { re: /apex\s*ad\s*blue/i, why: 'deprecated brand name "Apex Ad Blue"' },
  { re: /adblue/i, why: '"AdBlue" outside allowed trademark-footnote/FAQ contexts' },
  { re: /add\s+to\s+(cart|bag|basket)/i, why: 'e-commerce language' },
  { re: /\bcheckout\b/i, why: 'e-commerce language' },
  { re: /₹\s*\d/, why: 'price pattern (₹)' },
  { re: /\bRs\.?\s*\d/, why: 'price pattern (Rs.)' },
  { re: /\bINR\s*\d/, why: 'price pattern (INR)' },
  { re: /BIS[ -]certified/i, why: '"BIS certified" claim before CM/L licence exists (DECISIONS.md #1)' },
];

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith('.html')) yield p;
  }
}

let failures = 0;
for (const file of htmlFiles(DIST)) {
  // Collapse whitespace so multi-line HTML text nodes match the allowed sentences.
  let text = readFileSync(file, 'utf8').replace(/\s+/g, ' ');
  for (const allowed of ALLOWED_ADBLUE_PATTERNS) text = text.replace(allowed, '[ALLOWED]');
  for (const { re, why } of FORBIDDEN) {
    const m = text.match(re);
    if (m) {
      failures++;
      console.error(`✗ ${file.replace(DIST, 'dist')}: ${why} — found "${m[0]}"`);
    }
  }
}

if (failures) {
  console.error(`\nForbidden-strings check FAILED with ${failures} finding(s).`);
  process.exit(1);
}
console.log('✓ Forbidden-strings check passed (no banned branding/pricing/e-commerce language).');

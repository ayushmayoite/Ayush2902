import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const base = 'https://antigravity26022026.vercel.app';
const routes = [
  '/',
  '/about/', '/contact/', '/products/', '/projects/', '/service/', '/sustainability/',
  '/showrooms/', '/gallery/', '/catalog/', '/configurator/', '/downloads/',
  '/career/', '/news/', '/tracking/', '/social/',
  '/products/oando-chairs/', '/products/oando-other-seating/', '/products/oando-seating/',
  '/products/oando-workstations/', '/products/oando-tables/', '/products/oando-storage/',
  '/products/oando-soft-seating/', '/products/oando-collaborative/', '/products/oando-educational/'
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
];

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const outDir = path.join('reports', 'visual-audit', stamp);
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const route of routes) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    const url = `${base}${route}`;
    let status = 0;
    let finalUrl = '';
    let hasHidden404 = false;
    let bodyTextLen = 0;
    let title = '';
    let ok = false;
    try {
      const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      status = res ? res.status() : 0;
      await page.waitForTimeout(1200);
      finalUrl = page.url();
      title = await page.title();
      const html = await page.content();
      hasHidden404 = html.includes('NEXT_HTTP_ERROR_FALLBACK');
      bodyTextLen = await page.evaluate(() => (document.body?.innerText || '').trim().length);

      const fileSafe = route === '/' ? 'home' : route.replace(/^\//, '').replace(/[\/]/g, '__').replace(/[^a-zA-Z0-9_\-]/g, '');
      await page.screenshot({ path: path.join(outDir, `${vp.name}__${fileSafe}.png`), fullPage: true });
      ok = status >= 200 && status < 400 && !hasHidden404 && bodyTextLen > 80;
    } catch (err) {
      consoleErrors.push(String(err));
    }

    results.push({
      viewport: vp.name,
      route,
      status,
      finalUrl,
      title,
      hasHidden404,
      bodyTextLen,
      consoleErrors,
      ok,
    });

    await page.close();
  }
  await context.close();
}

await browser.close();

const reportPath = path.join(outDir, 'report.json');
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');

const bad = results.filter((r) => !r.ok);
console.log(`TOTAL=${results.length}`);
console.log(`BAD=${bad.length}`);
for (const b of bad) {
  console.log(`${b.viewport}\t${b.route}\tstatus=${b.status}\thidden404=${b.hasHidden404}\tbody=${b.bodyTextLen}\tfinal=${b.finalUrl}`);
}
console.log(`REPORT=${reportPath}`);

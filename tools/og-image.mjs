/**
 * Renders the Open Graph card for each page to assets/og/<page>.png (1200x630).
 *
 * Unlike tools/build.mjs this one needs a browser, so it is not part of the
 * normal build. Run it when a page title or tagline changes:
 *
 *   npx playwright install chromium     # once
 *   node tools/og-image.mjs
 *
 * Then commit the PNGs. tools/build.mjs points og:image at them.
 */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { OG_CARDS, SITE_URL } from "./pages.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "assets", "og");

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

for (const card of OG_CARDS) {
  await page.goto(pathToFileURL(join(ROOT, "tools", "og-template.html")).href);
  await page.evaluate(({ title, tagline, domain }) => {
    const h1 = document.getElementById("title");
    h1.textContent = title;
    h1.classList.toggle("long", title.length > 46);
    document.getElementById("tagline").textContent = tagline;
    document.getElementById("domain").textContent = domain;
  }, { ...card, domain: SITE_URL.replace(/^https?:\/\//, "") });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(OUT, `${card.name}.png`) });
  console.log("wrote", `assets/og/${card.name}.png`);
}

await browser.close();

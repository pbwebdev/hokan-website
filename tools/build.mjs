/**
 * Hokan website build.
 *
 * Turns the Claude Design canvas exports (*.dc.html + _ds/) into plain,
 * deployable static HTML. No dependencies — run with `node tools/build.mjs`.
 *
 * What it does:
 *   1. lifts the artboard markup out of the <x-dc> wrapper
 *   2. renders the <x-import> design-system components (TopBar, Button, Card)
 *      as real HTML
 *   3. swaps every generated inline style for a class from assets/site.css
 *   4. drops the "note before publishing" blocks (showNotes = false)
 *   5. writes a complete document with head, nav script and footer
 *   6. compiles _ds/**\/tokens/*.css into assets/tokens.css
 *
 * An inline style with no class mapping is a hard error: when the design
 * changes, the build tells you exactly which rule needs a class.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { NAV, PAGES, SHOW_NOTES, SITE_URL } from "./pages.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DS = join(ROOT, "_ds", readdirSync(join(ROOT, "_ds"))[0]);

/* Every inline style the design emits, mapped to a class in assets/site.css. */
const STYLE_CLASSES = new Map(Object.entries({
  // page shells
  "max-width:1120px;margin:0 auto;padding:64px clamp(20px,6vw,80px) 96px": "page",
  "max-width:1120px;margin:0 auto;padding:80px clamp(20px,6vw,80px) 96px": "page page--roomy",
  "background:var(--page);color:var(--text);padding:96px clamp(20px,6vw,80px) 88px": "band band--hero",
  "background:var(--page);color:var(--text);padding:80px clamp(20px,6vw,80px)": "band",
  "max-width:1120px;margin:0 auto;display:flex;flex-direction:column;gap:32px;align-items:flex-start": "band__inner band__inner--hero",
  "max-width:1120px;margin:0 auto;display:flex;flex-direction:column;gap:24px;align-items:flex-start": "band__inner",
  "display:flex;flex-direction:column;gap:16px;margin-bottom:64px": "page-head",

  // typography
  "font-family:var(--font-display);font-weight:400;font-size:clamp(40px,6vw,64px);line-height:1.05;letter-spacing:-0.01em;margin:0;max-width:16ch": "display-xl",
  "font-family:var(--font-display);font-weight:400;font-size:40px;line-height:1.1;letter-spacing:-0.01em;margin:0;max-width:24ch": "display-lg",
  "font-family:var(--font-display);font-weight:400;font-size:clamp(36px,5vw,48px);line-height:1.05;letter-spacing:-0.01em;margin:0;max-width:20ch": "page-title",
  "font-family:var(--font-display);font-weight:400;font-size:32px;line-height:1.15;letter-spacing:-0.01em;margin:0;max-width:30ch": "section-title",
  "font-family:var(--font-mono);font-size:13px;letter-spacing:0.04em;text-transform:uppercase;color:var(--text-muted)": "eyebrow",
  "font-size:20px;line-height:1.4;color:var(--text-2);max-width:640px;margin:0": "lead",
  "font-size:20px;line-height:1.45;color:var(--text-2);max-width:600px;margin:0": "lead lead--hero",
  "font-size:18px;line-height:1.5;color:var(--text-2);max-width:600px;margin:0": "lead lead--sm",
  "font-size:18px;line-height:1.35;font-weight:500;margin:0": "h3",
  "font-size:18px;line-height:1.35;font-weight:500;margin:0;margin-top:16px": "h3 h3--spaced",
  "margin:0;max-width:640px": "copy",
  "font-family:var(--font-mono)": "mono",
  "font-family:var(--font-mono);font-size:15px": "mono-amt",
  "display:block": "hero-mark",

  // stacks, rules, actions
  "display:flex;flex-direction:column;gap:8px": "stack-8",
  "display:flex;flex-direction:column;gap:16px": "stack-16",
  "display:flex;flex-direction:column;gap:24px": "stack-24",
  "display:flex;flex-direction:column;gap:32px": "stack-32",
  "display:flex;flex-direction:column;gap:32px;margin:16px 0": "stack-32 stack-32--my",
  "display:flex;flex-direction:column;gap:32px;margin-top:16px": "stack-32 stack-32--mt",
  "border:0;border-top:1px solid var(--border);margin:64px 0": "rule",
  "display:flex;gap:12px;flex-wrap:wrap": "actions",
  "margin-top:64px": "mt-64",

  // claims and legend
  "display:flex;gap:32px;flex-wrap:wrap;font-size:13px;color:var(--text-2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:12px 0;margin:16px 0 24px;max-width:672px": "legend",
  "display:flex;gap:32px;flex-wrap:wrap;font-size:13px;color:var(--text-2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:12px 0;margin-bottom:16px;max-width:672px": "legend legend--tight",
  "display:inline-flex;align-items:center;gap:10px": "legend__item",
  "display:grid;grid-template-columns:32px 1fr;align-items:start;max-width:672px": "claim",
  "width:14px;height:14px;background:var(--text);border-radius:2px;margin-top:5px": "seal seal--filled",
  "width:14px;height:14px;border:1.5px solid var(--border-input);border-radius:2px;margin-top:5px;box-sizing:border-box": "seal seal--outline",
  "width:12px;height:12px;background:var(--text);border-radius:2px": "seal seal--filled seal--sm",
  "width:12px;height:12px;border:1.5px solid var(--border-input);border-radius:2px;box-sizing:border-box": "seal seal--outline seal--sm",

  // lifecycle flow
  "display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:13px;margin:8px 0": "flow",
  "font-weight:500;padding:6px 12px;border-radius:4px;background:var(--card);border:1px solid var(--border)": "chip",
  "font-weight:500;padding:6px 12px;border-radius:4px;background:var(--inverse-surface);color:var(--inverse-text);border:1px solid var(--inverse-surface)": "chip chip--strong",
  "width:16px;height:1px;background:var(--border-input)": "flow__arrow",
  "font-family:var(--font-mono);font-size:12px;color:var(--text-muted);padding:0 4px": "flow__or",

  // tables
  "width:100%;max-width:760px;border-collapse:collapse;font-size:14px;line-height:1.5;margin:8px 0": "spec",
  "text-align:left;padding:10px 16px 10px 0;font-size:12px;font-weight:500;color:var(--text-muted);border-bottom:1px solid var(--border-input)": "",
  "padding:12px 16px 12px 0;border-bottom:1px solid var(--border);vertical-align:top;color:var(--text-2)": "",
  "padding:12px 16px 12px 0;border-bottom:1px solid var(--border);vertical-align:top;font-weight:500;color:var(--text);white-space:nowrap": "",

  // pricing
  "font-family:var(--font-mono);font-variant-numeric:tabular-nums;font-size:clamp(40px,5vw,56px);line-height:1;margin:8px 0;color:var(--text)": "stat",
  "font-size:24px;color:var(--text-muted)": "stat__unit",

  // use cases
  "border-top:1px solid var(--border-input)": "usecase-list",
  "display:flex;flex-wrap:wrap;gap:12px 40px;padding:32px 0;border-bottom:1px solid var(--border)": "usecase",
  "font-size:18px;line-height:1.35;font-weight:500;margin:0;font-size:20px;line-height:1.3;flex:0 0 240px;max-width:100%": "usecase__title",
  "flex:1 1 360px;display:flex;flex-direction:column;gap:12px": "usecase__body",

  // pre-publication notes
  "font-family:var(--font-mono);font-size:13px;line-height:1.5;color:var(--text-muted);margin:0;max-width:640px;padding:12px 16px;border:1px dashed var(--border-input);border-radius:4px": "note",
  "text-transform:uppercase;letter-spacing:0.04em": "note__label",

  // footer
  "border-top:1px solid var(--border);padding:48px clamp(20px,6vw,80px) 64px;font-size:14px;color:var(--text-2)": "site-footer",
  "max-width:1120px;margin:0 auto;display:flex;flex-direction:column;gap:40px": "site-footer__inner",
  "display:flex;flex-wrap:wrap;gap:40px 64px;justify-content:space-between;align-items:flex-start": "footer-top",
  "display:flex;flex-wrap:wrap;gap:40px 64px": "footer-cols",
  "font-weight:500;color:var(--text);margin-bottom:4px": "footer-col__title",
  "color:var(--text-2);text-decoration:none": "footer-link",
  "height:24px;display:block": "cardano-lockup",
  "margin:0;max-width:46ch;color:var(--text-muted)": "footer-note",
}));

/* --- small helpers ------------------------------------------------ */

const attr = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/* Visible text of a fragment, for structured data. */
function plain(fragment) {
  return fragment
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/* Schema.org JSON-LD. Only describes what the page actually says: the
   organisation, the site, and the questions and answers on the trust page. */
function structuredData(page, html, canonical) {
  const wants = page.schema || [];
  const graph = [];

  if (wants.includes("organization")) {
    graph.push({
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hokan",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/favicon.svg`,
      description:
        "Non-custodial escrow infrastructure on Cardano. Hokan is not a marketplace and not a custodian.",
    });
  }

  if (wants.includes("website")) {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Hokan",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    });
  }

  if (wants.includes("faq")) {
    const qa = [...html.matchAll(
      /<h3 class="h3 h3--spaced">([^<]*\?)<\/h3>\s*<p class="copy">([\s\S]*?)<\/p>/g,
    )].map(([, question, answer]) => ({
      "@type": "Question",
      name: plain(question),
      acceptedAnswer: { "@type": "Answer", text: plain(answer) },
    }));
    if (qa.length < 2) throw new Error(`${page.src}: FAQ markup changed, found ${qa.length} pairs`);
    graph.push({ "@type": "FAQPage", "@id": `${canonical}#faq`, mainEntity: qa });
  }

  if (!graph.length) return "";
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  return `<script type="application/ld+json">\n${json.replace(/</g, "\\u003c")}\n</script>\n`;
}

function topBar(active) {
  const links = NAV.map((l) => {
    const current = l.label === active ? ' aria-current="page"' : "";
    return `      <a href="${l.href}"${current}>${l.label}</a>`;
  }).join("\n");

  return `<header class="topbar">
    <a class="brand" href="index.html" aria-label="Hokan home">
      <svg class="brand__mark" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle class="brand__disc" cx="12" cy="12" r="12"></circle>
        <path class="brand__ink" d="M9 7H6.5V17H9M15 7H17.5V17H15" fill="none" stroke-width="1.75"></path>
        <circle class="brand__dot" cx="12" cy="12" r="1.9"></circle>
      </svg>
      <span class="brand__word">hokan</span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" hidden>
      <span class="nav-toggle__bars" aria-hidden="true"></span>Menu
    </button>
    <nav id="primary-nav" class="nav" aria-label="Primary">
${links}
    </nav>
  </header>`;
}

function build(page) {
  const raw = readFileSync(join(ROOT, page.src), "utf8");

  // 1. the artboard markup, without the canvas wrapper and its <helmet>
  const inner = raw.slice(raw.indexOf("<x-dc>") + 6, raw.indexOf("</x-dc>"));
  let html = inner.replace(/<helmet>[\s\S]*?<\/helmet>/, "").trim();
  html = html
    .replace(/^<div data-theme="\{\{ theme \}\}"[^>]*>/, "")
    .replace(/<\/div>\s*$/, "")
    .trim();

  // 2. design-system components
  html = html.replace(
    /<x-import[^>]*\.TopBar[^>]*><\/x-import>/,
    () => topBar(page.active),
  );
  // A Button always sits inside the link that carries its destination.
  html = html.replace(
    /<a href="([^"]+)" style="text-decoration:none"><x-import[^>]*\.Button[^>]*variant="(\w+)"[^>]*>([\s\S]*?)<\/x-import><\/a>/g,
    (_m, href, variant, label) => `<a class="btn btn--${variant}" href="${href}">${label}</a>`,
  );
  html = html.replace(
    /<x-import[^>]*\.Card[^>]*padding="32"[^>]*>([\s\S]*?)<\/x-import>/g,
    (_m, body) => `<div class="card card--pad-32">${body}</div>`,
  );

  // 3. pre-publication notes
  html = SHOW_NOTES
    ? html.replace(/<sc-if[^>]*>([\s\S]*?)<\/sc-if>/g, "$1")
    : html.replace(/<sc-if[^>]*>[\s\S]*?<\/sc-if>/g, "");

  // 4. inline styles -> classes
  html = html.replace(/ style="([^"]*)"/g, (_m, style) => {
    if (!STYLE_CLASSES.has(style)) {
      throw new Error(`${page.src}: no class mapped for inline style:\n  ${style}`);
    }
    const cls = STYLE_CLASSES.get(style);
    return cls ? ` class="${cls}"` : "";
  });

  // 6. wide tables scroll rather than push the page sideways
  html = html.replace(
    /<table class="spec">[\s\S]*?<\/table>/g,
    (table) => `<div class="table-scroll">${table}</div>`,
  );

  // 7. canvas filenames -> deployed filenames
  html = html.replace(/\.dc\.html/g, ".html");

  // 8. one <main> landmark covering every band, not just the prose column
  html = html
    .replace(/<main( class="[^"]*")>/, "<div$1>")
    .replace(/<\/main>/, "</div>");
  const afterHeader = html.indexOf("</header>") + "</header>".length;
  const beforeFooter = html.indexOf("<footer");
  html =
    html.slice(0, afterHeader) +
    '\n\n  <main id="main">\n' +
    html.slice(afterHeader, beforeFooter).trim() +
    "\n  </main>\n\n  " +
    html.slice(beforeFooter);

  const canonical = `${SITE_URL}/${page.out === "index.html" ? "" : page.out}`;
  const ogImage = `${SITE_URL}/assets/og/${page.out.replace(/\.html$/, "")}.png`;
  const jsonLd = structuredData(page, html, canonical);

  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${attr(page.description)}">
<link rel="canonical" href="${canonical}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#EFEAE0">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#14110F">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Hokan">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${attr(page.title)}">
<meta property="og:description" content="${attr(page.description)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(`${page.og.title} — ${page.og.tagline}`)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(page.title)}">
<meta name="twitter:description" content="${attr(page.description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&amp;family=IBM+Plex+Sans:wght@400;500;600&amp;family=IBM+Plex+Mono:wght@400;500&amp;display=swap">
<link rel="stylesheet" href="assets/tokens.css">
<link rel="stylesheet" href="assets/site.css">
${jsonLd}</head>
<body>
<!-- Built by tools/build.mjs from ${page.src}. Edit the design source, not this file. -->
<a class="skip-link" href="#main">Skip to content</a>
${html}
<script src="assets/site.js" defer></script>
</body>
</html>
`;

  writeFileSync(join(ROOT, page.out), doc);
  return page.out;
}

/* Design tokens, compiled into one file. The webfont @import is dropped:
   the pages load Google Fonts with a <link> so it does not block on CSS. */
function buildTokens() {
  const order = ["colors", "typography", "spacing", "elevation", "base"];
  const css = order
    .map((name) => {
      const body = readFileSync(join(DS, "tokens", `${name}.css`), "utf8").trim();
      return `/* ---- tokens/${name}.css ---- */\n${body}`;
    })
    .join("\n\n");

  writeFileSync(
    join(ROOT, "assets", "tokens.css"),
    `/* Generated by tools/build.mjs from ${DS.slice(ROOT.length + 1)}/tokens/.\n   Do not edit: change the design system and rebuild. */\n\n${css}\n`,
  );
  return "assets/tokens.css";
}

/* Crawl directives. The design sources sit next to the deployed pages, so
   they are disallowed rather than left to be discovered. */
function buildRobots() {
  const body = `User-agent: *
Allow: /
Disallow: /_ds/
Disallow: /tools/
Disallow: /*.dc.html$

Sitemap: ${SITE_URL}/sitemap.xml
`;
  writeFileSync(join(ROOT, "robots.txt"), body);
  return "robots.txt";
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PAGES.map((p) => {
    const loc = `${SITE_URL}/${p.out === "index.html" ? "" : p.out}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  }).join("\n");
  writeFileSync(
    join(ROOT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  return "sitemap.xml";
}

console.log("wrote", buildTokens());
for (const page of PAGES) console.log("wrote", build(page));
console.log("wrote", buildSitemap());
console.log("wrote", buildRobots());

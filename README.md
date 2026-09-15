# hokan-website

The Hokan marketing site: static HTML, no framework, no build dependencies.

The pages are generated from the Claude Design canvas export that lives in this
repo, so the design stays the source of truth and the deployed HTML stays plain.

## Layout

| Path | What it is |
| --- | --- |
| `index.html`, `how-it-works.html`, `architecture.html`, `use-cases.html`, `pricing.html`, `trust.html` | The deployed site. Generated — do not hand-edit. |
| `assets/site.css` | The stylesheet. Hand-written; every class the build emits is defined here. |
| `assets/tokens.css` | Design tokens, compiled from `_ds/**/tokens/`. Generated. |
| `assets/site.js` | Progressive enhancement: the small-screen menu. The site works without it. |
| `assets/*.svg` | Logo mark, Cardano lockup, favicon. |
| `tools/build.mjs` | The build. Node 18+, no dependencies. |
| `*.dc.html`, `_ds/`, `support.js` | The Claude Design canvas export. The design source. |

## Build

```sh
node tools/build.mjs
```

It reads each `*.dc.html` artboard and writes the matching `.html` page:

1. lifts the markup out of the `<x-dc>` canvas wrapper
2. renders the `<x-import>` design-system components (TopBar, Button, Card) as real HTML
3. replaces every generated inline style with a class from `assets/site.css`
4. drops the "note before publishing" blocks (`SHOW_NOTES = false`)
5. wraps the page in a document with `<head>`, a skip link, a `<main>` landmark and the footer
6. compiles `_ds/**/tokens/*.css` into `assets/tokens.css`

An inline style with no class mapped to it fails the build and names the rule.
That is deliberate: when the design changes, the build tells you exactly what
needs a class rather than silently shipping a page that looks wrong.

## Changing the design

Edit the design in Claude Design, export it over the `*.dc.html` files and
`_ds/`, run the build, and commit both the sources and the generated pages.
For a change that is purely presentational — spacing, colour, a breakpoint —
edit `assets/site.css` directly and rebuild.

## What the build adds on top of the canvas

The artboards are fixed-width design surfaces; these are the things a shipped
page needs that a canvas does not have.

- Responsive nav: below 860px the primary nav collapses behind a Menu button
  (`assets/site.js`). Without JavaScript the nav simply stays expanded.
- Dark mode by system preference, mirroring `[data-theme="dark"]` from the
  design tokens. The bands the design marks `data-theme="dark"` stay dark
  in both modes.
- Accessibility: one `<main>` landmark per page, a skip link, `aria-current`
  on the active nav item, focus-visible rings from the token base styles.
- `<head>`: title, meta description, Open Graph and Twitter card tags, SVG
  favicon, and Google Fonts loaded with `<link rel=preconnect>` rather than
  the token file's `@import`.
- Wide tables scroll inside their own container instead of pushing the page
  sideways on a phone.

## Deployment

Static files at the repository root — push to `main` and the host serves it.
`.nojekyll` stops GitHub Pages' Jekyll pass from dropping `_ds/`.

## Copy that is still a placeholder

These come from the design and need real values before the site is announced:

- `trust.html` — the security contact reads `security@[domain]`.
- Every `#docs`, `#repo` and `#status` link in the nav and footer.
- `trust.html` — "What assets are supported?" and "Are you a money
  transmitter?" are not published. The design carries only a note to the
  authors where the answers go; add the answers in `trust.dc.html` and remove
  the entries from `dropHeadings` in `tools/build.mjs`.
- `trust.html` — the Audit section describes scope but does not state the
  stage. The design's note says not to publish it as an implied audit.

/**
 * Shared site configuration: the canonical origin, the nav, and one entry per
 * page. Both tools/build.mjs and tools/og-image.mjs read from here so a title
 * is never written twice.
 */

export const SITE_URL = "https://usehokan.com";

/* Editorial notes addressed to the authors, not to visitors. */
export const SHOW_NOTES = false;

export const NAV = [
  { label: "How it works", href: "how-it-works.html" },
  { label: "Architecture", href: "architecture.html" },
  { label: "Use cases", href: "use-cases.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Trust", href: "trust.html" },
  /* Not written yet. Rendered as a label with a Soon pill, never a dead link. */
  { label: "Docs", soon: true },
];

/* The company that builds Hokan. Shown in the footer on every page and on the
   trust page, so the relationship is never something a reader has to infer. */
export const PARENT = {
  name: "Moshi Concepts",
  legalName: "Moshi Concepts Inc.",
  url: "https://moshiconcepts.com/",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/moshi-concepts/" },
    { label: "X", href: "https://x.com/moshiconcepts" },
  ],
};

/* Footer columns. A `soon` entry renders as muted text with a Soon pill. */
export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "how-it-works.html" },
      { label: "Architecture", href: "architecture.html" },
      { label: "Use cases", href: "use-cases.html" },
      { label: "Pricing", href: "pricing.html" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", soon: true },
      { label: "API reference", soon: true },
      { label: "Sandbox", soon: true },
      { label: "Contracts", soon: true },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security", href: "trust.html" },
      { label: "Audit", href: "trust.html#audit" },
      { label: "Questions", href: "trust.html#faq" },
      { label: "Status", soon: true },
    ],
  },
];

export const PAGES = [
  {
    src: "index.dc.html",
    out: "index.html",
    title: "Hokan — Escrow as infrastructure for Cardano",
    description:
      "Non-custodial escrow on Cardano. Funds lock in a contract, release on conditions both sides agreed, and settle on chain. Integrate it with an API call.",
    og: {
      title: "Escrow as infrastructure for Cardano.",
      tagline:
        "Funds lock in a contract, release on conditions both sides agreed, and settle on chain.",
    },
    schema: ["organization", "website"],
  },
  {
    src: "how-it-works.dc.html",
    out: "how-it-works.html",
    active: "How it works",
    title: "How Hokan escrow works: lifecycle, roles and disputes",
    description:
      "Five states, six roles, and one rule that decides everything else: the person being paid never has to sign. How funding, approval, release and disputes work.",
    og: {
      title: "How it works",
      tagline:
        "Five states, six roles, and one rule: the person being paid never has to sign.",
    },
  },
  {
    src: "architecture.dc.html",
    out: "architecture.html",
    active: "Architecture",
    title: "Architecture: one Cardano validator, one API — Hokan",
    description:
      "One contract on Cardano, one hosted API, and a rollback-aware chain follower. How the validator, the escrow token, configuration and versioning fit together.",
    og: {
      title: "Architecture",
      tagline:
        "One contract on Cardano, one hosted API, and a rollback-aware chain follower.",
    },
  },
  {
    src: "use-cases.dc.html",
    out: "use-cases.html",
    active: "Use cases",
    title: "Use cases: bounties, milestones and marketplaces — Hokan",
    description:
      "Bounties, freelance milestones, marketplace transactions, security deposits, grant funding, agent commerce and OTC trades on the same escrow contract.",
    og: {
      title: "What people build on it",
      tagline:
        "Bounties, freelance milestones, marketplaces, deposits, grants and agent commerce.",
    },
  },
  {
    src: "pricing.dc.html",
    out: "pricing.html",
    active: "Pricing",
    title: "Pricing: 0.5% on released funds — Hokan",
    description:
      "One protocol fee of 0.5% on released funds, capped at 1 000 USD per escrow. Your own fees on top, capped by the validator. Nothing charged if it never settles.",
    og: {
      title: "Pricing",
      tagline:
        "0.5% on released funds, capped by the contract. Nothing charged on an escrow that never settles.",
    },
  },
  {
    src: "trust.dc.html",
    out: "trust.html",
    active: "Trust",
    title: "Trust: what Hokan can and cannot do",
    description:
      "The guarantees that hold whether or not you trust the team: we cannot move, trap or re-price your funds. Plus audit scope, vulnerability reporting and the FAQ.",
    og: {
      title: "What we can and cannot do",
      tagline:
        "The guarantees that hold whether or not you trust the team, because the validator enforces them.",
    },
    schema: ["faq"],
  },
];

export const OG_CARDS = PAGES.map((p) => ({
  name: p.out.replace(/\.html$/, ""),
  title: p.og.title,
  tagline: p.og.tagline,
}));

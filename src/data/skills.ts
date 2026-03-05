export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z"/></svg>`,
    title: "Digital Marketing Strategy",
    description: "Strategy, positioning, offers, and campaign planning with a focus on measurable outcomes.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>`,
    title: "Paid Ads (Meta & Google)",
    description: "Meta Ads & Google Ads fundamentals: targeting, creatives, reporting, and optimization mindset.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 19h16v2H4v-2zM6 17V7h2v10H6zm5 0V3h2v14h-2zm5 0V10h2v7h-2z"/></svg>`,
    title: "Analytics & Conversion",
    description: "Google Analytics basics, performance tracking, reporting, and conversion-oriented improvements.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v6H3V3zm0 8h18v10H3V11zm4 2v6h10v-6H7z"/></svg>`,
    title: "Content & Social Media",
    description: "Content planning/creation/reporting, community management, and influencer collaboration basics.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Web Skills (Plus)",
    description: "Working knowledge of HTML, CSS, JavaScript, Astro, Git/GitHub — enough to build and maintain modern marketing sites.",
  },
];

export type Skill = (typeof skills)[number];

export const projects = [
  {
    title: "Instagram Reel Framing Tool",
    techStack: "FFmpeg • Video processing • Internal tool",
    problem:
      "Preparing social media videos manually is repetitive and time-consuming, especially when each video needs clean framing and publishing-ready formatting.",
    solution:
      "Built a web-based tool that lets users upload a video, automatically detect the best format, apply a styled frame, and export an Instagram-ready result using FFmpeg.",
    result:
      "Created a faster and more consistent workflow for video formatting while reducing manual preparation time by around 70% in personal use.",
    ctaText: "Open Live Tool",
    ctaLink: "https://instagram-reels-maker-production.up.railway.app/instagram-frame.html",
    caseStudyLink: "/case-studies/reel-framing-tool",
  },
  {
    title: "Harmonia Café Marketing Concept",
    techStack: "Content strategy • Positioning • Client pitch",
    problem:
      "A local café needed a stronger visual identity and a clearer digital presentation that would make the business look more modern, consistent, and engaging online.",
    solution:
      "Created a concept project that combined positioning, content direction, visual presentation and a client-friendly marketing pitch showing how the café could improve its social media presence.",
    result:
      "Produced a structured concept that demonstrates how a local business could strengthen branding and improve audience perception through better content and design consistency.",
    ctaText: "View Concept",
    ctaLink: "https://harmonia-client.pages.dev",
    caseStudyLink: "/case-studies/harmonia-cafe",
  },
  {
    title: "Rast Biznisa — Instagram Experiment",
    techStack: "Content strategy • Growth experiments • Instagram",
    problem:
      "Organic growth on Instagram is difficult when content lacks strong hooks, clear positioning and repeatable formats that hold audience attention.",
    solution:
      "Built an experimental Instagram project to test different messaging styles, hooks, post structures and business-focused content formats.",
    result:
      "Generated practical insights about audience engagement, content structure and how business-oriented content can be positioned more effectively.",
    ctaText: "View Instagram",
    ctaLink: "https://www.instagram.com/rastbiznisa_bg?igsh=bHVvczFncHYwbjNk&utm_source=qr",
    caseStudyLink: "/case-studies/rast-biznisa",
  },
  {
    title: "Crypto Ecosystem Research — Terra / LUNA Collapse",
    techStack: "Research • Ecosystem analysis • Crypto narratives",
    problem:
      "The collapse of Terra created confusion around what happened, why the system failed, and how the remaining LUNA Classic ecosystem continued evolving afterward.",
    solution:
      "Conducted independent research into the Terra collapse, the UST depeg, the LUNA supply explosion, the Terra 2.0 split, and the current community-driven rebuilding efforts around LUNC and USTC.",
    result:
      "Built a structured research case study that explains one of the most important ecosystem failures in crypto and the long-term narrative, governance and rebuilding attempts that followed.",
    ctaText: "Read Summary",
    ctaLink: "/case-studies/luna-research",
    caseStudyLink: "/case-studies/luna-research",
  },
];

export type Project = (typeof projects)[number];

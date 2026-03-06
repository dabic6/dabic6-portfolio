export const projects = [
  {
    title: "Instagram Reel Framing Tool",
    techStack: "Web app • FFmpeg • Content production",
    description:
      "Problem: Preparing social media videos manually is repetitive and time-consuming. Solution: Built a web tool that lets users upload a video, automatically detect the best format, apply a styled frame, and export Instagram-ready content using FFmpeg. Result: Reduced manual content preparation time by around 70% in personal workflow.",
    ctaText: "Open Live Tool",
    ctaLink: "https://instagram-reels-maker-production.up.railway.app/instagram-frame.html",
  },
  {
    title: "Harmonia Café Marketing Concept",
    techStack: "Marketing strategy • Content concept • Client pitch",
    description:
      "Problem: A local café needed a stronger visual identity and a clearer social media direction. Solution: Created a concept project focused on positioning, visual branding, and a content strategy tailored to the target audience. Result: Produced a clear client-facing marketing pitch that demonstrates how a local business could improve digital presentation and engagement.",
    ctaText: "View Demo",
    ctaLink: "https://harmonia-client.pages.dev",
  },
  {
    title: "Rast Biznisa — Instagram Growth Experiment",
    techStack: "Social media • Growth experiments • Content strategy",
    description:
      "Problem: Many small business pages struggle to grow consistently through organic content. Solution: Built an experimental Instagram project to test different hooks, formats, and posting approaches for business-focused content. Result: Developed practical insights into what improves audience engagement and content positioning.",
    ctaText: "View Instagram",
    ctaLink: "https://www.instagram.com/rastbiznisa_bg?igsh=bHVvczFncHYwbjNk&utm_source=qr",
  },
  {
    title: "This Portfolio Website",
    techStack: "Astro • Portfolio design • Personal branding",
    description:
      "Problem: A standard CV does not fully show practical skills, projects, or initiative. Solution: Built a personal portfolio website to present marketing projects, AI tools, and technical work in a clean and professional format. Result: Created a stronger personal brand presence and a better way to communicate both marketing and technical capabilities.",
    ctaText: "GitHub Repo",
    ctaLink: "https://github.com/dabic6/dabic6-portfolio",
  },
];

export type Project = (typeof projects)[number];
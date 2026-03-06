import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';

export const projects = [
  {
    title: "Harmonia — Before/After Content Tool",
    techStack: "Web tool • Content workflow",
    description:
      "A lightweight web tool for creating before/after visuals from video frames (text, colors, formats). Built to speed up social media content production for local businesses.",
    ctaText: "View Demo",
    ctaLink: "https://harmonia-client.pages.dev",
    icon: TailwindIcon,
  },
  {
    title: "Content Strategy Experiments (Local Businesses)",
    techStack: "Social media • Growth",
    description:
      "Testing content structures for local businesses (hook → trust → offer) with a focus on practical outcomes: DMs, calls and bookings.",
    ctaText: "View Instagram",
    ctaLink: "https://www.instagram.com/rastbiznisa_bg?igsh=bHVvczFncHYwbjNk&utm_source=qr",
    icon: PosthogIcon,
  },
  {
    title: "This Portfolio (Astro Template — Customized)",
    techStack: "Astro • Tailwind • SEO basics",
    description:
      "An international marketing portfolio customized to highlight digital marketing experience, leadership background, and practical web skills.",
    ctaText: "GitHub Repo",
    ctaLink: "https://github.com/dabic6/dabic6-portfolio",
    icon: SupabaseIcon,
  },
];

export type Project = (typeof projects)[number];

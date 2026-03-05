export type LogoItem = { name: string; icon: string };

// Carousel icons are rendered via `set:html`, so we provide safe <img> tags.
// Assets live under /public/logos so they work in dev + production without bundler quirks.

const img = (src: string, alt: string) =>
  `<img src="${src}" alt="${alt}" loading="lazy" class="w-10 h-10 object-contain" />`;

export const logos: LogoItem[] = [
  { name: 'Meta Ads', icon: img('/logos/meta.svg', 'Meta Ads') },
  { name: 'Google Ads', icon: img('/logos/google-ads.svg', 'Google Ads') },
  { name: 'Google Analytics', icon: img('/logos/google-analytics.svg', 'Google Analytics') },
  { name: 'SEO', icon: img('/logos/seo.svg', 'SEO') },
  { name: 'Canva', icon: img('/logos/canva.svg', 'Canva') },
  { name: 'Hootsuite', icon: img('/logos/hootsuite.svg', 'Hootsuite') },
  { name: 'Adobe Photoshop', icon: img('/logos/photoshop.svg', 'Adobe Photoshop') },
  { name: 'Microsoft Office', icon: img('/logos/microsoft-office.svg', 'Microsoft Office') },
  { name: 'Microsoft Excel', icon: img('/logos/excel.png', 'Microsoft Excel') },
  { name: 'ChatGPT', icon: img('/logos/chatgpt.svg', 'ChatGPT') },
  { name: 'HTML', icon: img('/logos/html.svg', 'HTML') },
  { name: 'CSS', icon: img('/logos/css.svg', 'CSS') },
  { name: 'JavaScript', icon: img('/logos/javascript.svg', 'JavaScript') },
  { name: 'GitHub', icon: img('/logos/github.svg', 'GitHub') },
  { name: 'Pomelli', icon: img('/logos/pomelli.svg', 'Pomelli') },
];

import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Assistant Store Manager (Acting Store Manager)",
    company: "Fossil Group",
    period: "Feb 2025 — Dec 2025",
    region: "Metzingen, Germany",
    description:
      "Managed daily operations and coordinated an international team in a fast-paced outlet environment. Supported planning and execution of marketing and promotional activities, collaborated on messaging/timing with the outlet center, and used performance data to improve future campaigns. Also supported hiring, onboarding, training and scheduling.",
    technologies: ["Campaign Planning", "Promotions", "KPI Tracking", "Team Leadership", "Reporting"],
  },
  {
    title: "Store Supervisor",
    company: "Under Armour",
    period: "Apr 2024 — Jan 2025",
    region: "Metzingen, Germany",
    description:
      "Supervised team members to achieve sales and performance targets, supported onboarding and training, monitored KPIs and shared insights with management. Acted as a communication bridge between team and management to keep operations running smoothly.",
    technologies: ["Retail Operations", "Team Leadership", "Sales KPIs", "Customer Experience"],
  },
  {
    title: "Assistant Cinema Manager",
    company: "Traumpalast (Lochmann Filmtheaterbetriebe)",
    period: "Jan 2023 — Apr 2024",
    region: "Esslingen, Germany",
    description:
      "Supported cinema management with operational coordination and team supervision. Collaborated with the marketing team on campaign execution, menu concepts and graphic assets, contributing to smoother operations during peak showtimes and premieres.",
    technologies: ["Operations", "Marketing Collaboration", "Team Coordination", "Graphic Design Support"],
  },
  {
    title: "Technical Manager",
    company: "Cineplexx Serbia",
    period: "Sep 2018 — Jan 2023",
    region: "Belgrade, Serbia",
    description:
      "Led technical operations across screenings and coordinated staff training and procedures. Successfully supported a major film festival with 200+ screenings and tight schedules. Worked closely with marketing on pre-show advertising placement and partner coordination.",
    technologies: ["Team Leadership", "Operations", "Training", "Advertising Coordination"],
  },
  {
    title: "Marketing Intern",
    company: "Cineplexx Serbia",
    period: "May 2022 — Aug 2022",
    region: "Belgrade, Serbia",
    description:
      "Supported coordination of advertising placements with partner companies, learned strategic positioning based on audience interests and schedules, contributed to website improvement initiatives, and gained hands-on experience across marketing tasks including research and customer engagement.",
    technologies: ["Advertising", "Content Support", "Website Improvements", "Reporting"],
  },
  {
    title: "Cinema Operations (Ticketing / Floor)",
    company: "Cineplexx Serbia",
    period: "Sep 2015 — Sep 2018",
    region: "Belgrade, Serbia",
    description:
      "Supported daily cinema operations with a focus on guest flow, ticket control strategies and service standards, maintaining smooth operations during high-traffic showtimes and premieres.",
    technologies: ["Operations", "Customer Service", "Organization"],
  },
];

export type WorkItem = (typeof work)[number];

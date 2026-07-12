// ─── Project Data ───

export type ProjectStatus =
  | "live"
  | "development"
  | "private"
  | "research"
  | "coming-soon";

export type ProjectLink = {
  type: "appstore" | "playstore" | "website" | "github";
  url: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  platforms: ("ios" | "android" | "web")[];
  status: ProjectStatus;
  statusLabel: string;
  accessNote?: string;
  links: ProjectLink[];
  color: string;
  icon: string;
};

export const projects: Project[] = [
  {
    title: "SoK'ari",
    description:
      "A mobile application dedicated to supporting and educating diabetic patients, featuring an Express.js backend for secure authentication and data processing, and quickly gaining over 1,000 users within its first month.",
    category: "Health & Education",
    platforms: ["ios", "android"],
    status: "live",
    statusLabel: "Live",
    links: [
      { type: "appstore", url: "https://apps.apple.com/tn/app/sokari-suivi-du-diab%C3%A8te/id6746409714" },
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=sokaricare.sokari.com.sokari&hl=en" },
    ],
    color: "#53bfcc",
    icon: "/Sok'ari.png",
  },
  {
    title: "Wael Academy",
    description:
      "A complete e-learning platform for web and mobile, integrating Zoom for live classes, robust course management, and subscription systems, successfully scaling to serve approximately 8,000 users.",
    category: "EdTech",
    platforms: ["ios", "android", "web"],
    status: "live",
    statusLabel: "Live",
    links: [

      { type: "website", url: "https://app.waelacademy.com/" },
    ],
    color: "#d8de6b",
    icon: "/Wael Academy.png",
  },
  {
    title: "Servini",
    description:
      "A booking application designed to boost restaurant revenue and improve the customer experience, helping the startup secure the Startup Act label and onboard multiple partner clients.",
    category: "Food & Beverage",
    platforms: ["ios", "android"],
    status: "live",
    statusLabel: "Live",
    links: [
      { type: "appstore", url: "https://apps.apple.com/us/app/servini/id1639163124" },
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=online.servini.servini&hl=en" },
    ],
    color: "#f7bb02",
    icon: "/Servini.png",
  },
  {
    title: "LOLCards",
    description:
      "A feature-rich card game offering real-time player synchronization via SignalR, complemented by smooth animations and a push notification system that boosted user retention.",
    category: "Entertainment",
    platforms: ["ios", "android"],
    status: "live",
    statusLabel: "Live",
    links: [
      { type: "appstore", url: "https://apps.apple.com/us/app/lol-cards/id6459450693" },
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.xospace.lolcards&hl=en" },
      { type: "website", url: "https://lolcards.io/#/language_page" },
    ],
    color: "#d1b680",
    icon: "/LOL Cards.png",
  },
  {
    title: "NAEST Express",
    description:
      "A comprehensive logistics application for a French startup, featuring real-time GPS tracking, live shipment status updates, and integrated Stripe payments for a seamless delivery management experience.",
    category: "Logistics",
    platforms: ["ios", "android"],
    status: "private",
    statusLabel: "Private",
    accessNote: "Private client project",
    links: [],
    color: "#030891",
    icon: "/Naest Express.png",
  },
  {
    title: "Kemawi",
    description:
      "A logistics platform connecting merchants, drivers, and consumers across West Africa, streamlining deliveries to be faster, simpler, and more secure through an integrated technology network.",
    category: "Logistics",
    platforms: ["ios", "android"],
    status: "development",
    statusLabel: "In Development",
    accessNote: "Source available upon request",
    links: [],
    color: "#16493d",
    icon: "/Kemawi.png",
  },
  {
    title: "Liyane",
    description:
      "A smart screenshot inbox that automatically organizes and analyzes saved images using AI. It extracts meaningful content, suggests categories, and schedules reminders, transforming messy camera roll clutter into actionable, searchable items.",
    category: "AI & Productivity",
    platforms: ["ios", "android"],
    status: "coming-soon",
    statusLabel: "Coming Soon",
    accessNote: "Contact for demo",
    links: [{ type: "website", url: "#" }],
    color: "#fcb985",
    icon: "/Liyane.png",
  },
  {
    title: "Samt",
    description:
      "A real-time shared canvas app designed for intimate, emotional communication. Two users connect instantly through a minimal drawing space, enabling presence and expression beyond words.",
    category: "Social / Communication",
    platforms: ["ios", "android"],
    status: "coming-soon",
    statusLabel: "Coming Soon",
    accessNote: "Contact for demo",
    links: [{ type: "website", url: "#" }],
    color: "#4a3f34",
    icon: "/Bayn.png",
  },
];

// ─── Skills Data ───

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "MVVM", "Riverpod", "BLoC"],
  },
  {
    title: "Backend",
    skills: ["Firebase", "Supabase", "REST APIs"],
  },
  {
    title: "Native",
    skills: ["Kotlin", "Swift"],
  },
  {
    title: "DevOps",
    skills: ["GitHub Actions", "Codemagic", "Shorebird"],
  },
];

// ─── Experience Data ───

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Mobile Developer",
    company: "Wael Academy",
    period: "2025 — Present",
    description:
      "Built and scaled a cross-platform e-learning ecosystem serving 8,000+ users, combining live classes, subscriptions, and intuitive learning experiences across web and mobile.",
  },
  {
    role: "Part-Time Lecturer",
    company: "Faculty of Sciences of Monastir",
    period: "2023 — 2024",
    description:
      "Taught Python and C programming to an average of 50 undergraduate students per semester, providing a strong foundation in programming concepts.",
  },
  {
    role: "Co-Founder & Mobile Developer",
    company: "Servini Solution",
    period: "2022 — 2024",
    description:
      "Co-founded a startup and led the development of a mobile application to boost restaurant revenue and improve customer experience.",
  },
];

// ─── Contact Data ───

export const contact = {
  email: "dhiaabdlelli@gmail.com",
  linkedin: "https://linkedin.com/in/abdellidhia",
  github: "https://github.com/dhiaCodes",
  resume: "/resume.pdf",
};

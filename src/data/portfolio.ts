export type ExternalLink = {
  label: string;
  href?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  focus: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type Project = {
  name: string;
  context: string;
  period?: string;
  status?: string;
  summary: string;
  stack: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  title: string;
  icon: "code" | "mobile" | "ai" | "delivery";
  skills: string[];
};

export const profile: Profile = {
  name: "Andreas Siedler",
  title: "Senior Full-Stack Developer for React, AI and Mobile Products",
  location: "Vienna, Austria",
  email: "andreas.siedler@gmail.com",
  summary:
    "I build responsive, scalable web and mobile products with modern JavaScript frameworks, strong user experience, and pragmatic AI integrations.",
  focus: [
    "React and TypeScript frontends",
    "Expo and Flutter mobile apps",
    "AI workflows with OpenAI and ElevenLabs",
    "Scalable product architecture",
  ],
  stats: [
    { value: "10+", label: "years building digital products" },
    { value: "React", label: "core frontend craft" },
    { value: "AI", label: "recent product focus" },
  ],
};

export const externalLinks: ExternalLink[] = [
  { label: "GitHub" },
  { label: "LinkedIn" },
  { label: "Personal projects" },
];

export const clientProjects: Project[] = [
  {
    name: "Coach2Go",
    context: "Cross-platform mental training app",
    period: "2025 - present",
    summary:
      "Building athlete-coach workflows, guided audio sessions, progress tracking, AI-assisted content generation, and coach insights.",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Supabase",
      "OpenAI API",
      "ElevenLabs",
      "Gluestack UI",
    ],
  },
  {
    name: "Verbund AG",
    context: "Frontend-focused product development",
    period: "2022 - present",
    summary:
      "Developing and optimizing React features, contributing to .NET integrations, testing flows, and supporting mature CI/CD delivery.",
    stack: [
      "React",
      "TypeScript",
      ".NET",
      "Jest",
      "Testing Library",
      "Jenkins",
      "Scrum",
    ],
  },
  {
    name: "Netkey / Webrestaurant",
    context: "Online canteen platform",
    period: "2024 - 2025",
    summary:
      "Delivered web app features in a small agile team, including payment workflows, Docker environments, and GitLab CI/CD.",
    stack: [
      "Laravel",
      "Vue.js",
      "TypeScript",
      "Docker",
      "GitLab CI/CD",
      "Payment APIs",
    ],
  },
  {
    name: "Orbyz",
    context: "Social networking mobile app",
    period: "2024 - 2025",
    summary:
      "Built a cross-platform social app with user profiles, messaging, content sharing, notifications, and Django API services.",
    stack: [
      "Flutter",
      "FlutterFlow",
      "Django",
      "Python",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    name: "AIEndoscopic",
    context: "Corporate website and CMS architecture",
    period: "2023 - 2024",
    summary:
      "Implemented a responsive, mobile-first website with a headless CMS, performance-minded architecture, and SEO foundations.",
    stack: ["Next.js", "React", "Storyblok", "Tailwind CSS", "SEO"],
  },
  {
    name: "MediaShop / Computerfutures",
    context: "Headless commerce platform",
    period: "2020 - 2022",
    summary:
      "Contributed to a React commerce frontend with reusable components, Storybook, Cypress coverage, and backend integrations.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Symfony",
      "Storybook",
      "Cypress",
      "Commercetools",
    ],
  },
];

export const privateProjects: Project[] = [
  {
    name: "Private project placeholder 01",
    context: "Editable project slot",
    status: "Draft placeholder",
    summary:
      "Replace this with a current personal project, the problem it solves, and the stage it is in.",
    stack: ["Add stack", "Add link", "Add status"],
  },
  {
    name: "Private project placeholder 02",
    context: "Editable project slot",
    status: "Draft placeholder",
    summary:
      "Use this card for an experiment, SaaS idea, AI workflow, app prototype, or open-source tool.",
    stack: ["Add stack", "Add link", "Add status"],
  },
  {
    name: "Private project placeholder 03",
    context: "Editable project slot",
    status: "Draft placeholder",
    summary:
      "Keep the copy specific once the project is ready: audience, outcome, and what you built.",
    stack: ["Add stack", "Add link", "Add status"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "Tailwind CSS",
      "Responsive UI",
      "Storybook",
    ],
  },
  {
    title: "Mobile",
    icon: "mobile",
    skills: [
      "Expo",
      "React Native",
      "Flutter",
      "FlutterFlow",
      "Mobile architecture",
      "Gluestack UI",
    ],
  },
  {
    title: "AI and Backend",
    icon: "ai",
    skills: [
      "OpenAI API",
      "Codex",
      "Claude",
      "ElevenLabs",
      "Node.js",
      "Supabase",
      "Django",
      "Laravel",
    ],
  },
  {
    title: "Delivery",
    icon: "delivery",
    skills: [
      "Software architecture",
      "REST APIs",
      "Docker",
      "CI/CD",
      "GitLab",
      "Jenkins",
      "AWS",
      "Testing",
    ],
  },
];

export const experience: Experience[] = [
  {
    organization: "Cyberbelt / ZTP.digital",
    role: "Frontend Developer",
    period: "2022",
    summary:
      "React dashboard app with Tailwind CSS, data visualization, reusable components, and performance-minded UI.",
  },
  {
    organization: "OMComputer",
    role: "Mobile App Developer",
    period: "2022",
    summary:
      "Flutter app delivery, mobile architecture consulting, and support for internal development teams.",
  },
  {
    organization: "Quqon",
    role: "Shop Developer",
    period: "2022",
    summary:
      "Shopware 6 feature development, staging environment setup, and ecommerce workflow improvements.",
  },
  {
    organization: "Enlivio",
    role: "Full-Stack Developer",
    period: "2020 - 2021",
    summary:
      "MERN stack web application, Flutter mobile app work, TensorFlow integration, and cloud delivery support.",
  },
  {
    organization: "Waytation",
    role: "Full-Stack Developer",
    period: "2019 - 2020",
    summary:
      "Vue.js and React product work, Django services, REST APIs, browser compatibility, and Scrum delivery.",
  },
  {
    organization: "Apoolco",
    role: "Frontend Development",
    period: "2016 - 2019",
    summary:
      "Shopware development, responsive design, technical SEO, and a React-based shop ticket system.",
  },
  {
    organization: "Comstratega",
    role: "Web Development",
    period: "2015",
    summary:
      "WordPress websites, SEO and SEM support, customer training, layout work, and digital content.",
  },
];

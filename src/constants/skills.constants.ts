export const skillCategories = [
  // core stack
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    id: "frontend-frameworks",
    name: "Frontend",
    skills: ["Next.js", "React"],
  },
  {
    id: "backend-frameworks",
    name: "Backend",
    skills: ["Nest.js", "Express.js", "Node.js", "Bun.js"],
  },
  // {
  //   id: "backend-runtimes",
  //   name: "Backend Runtimes",
  //   skills: ["Node.js", "Bun.js"],
  // },

  // ui styling
  {
    id: "css-frameworks",
    name: "CSS & UI",
    skills: ["Tailwind", "Material UI", "shadcn/ui", "Chakra UI"],
  },

  // databases
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB", "MySQL"],
  },

  // global state management
  {
    id: "state-management",
    name: "State Management",
    skills: ["Zustand", "Redux Toolkit"],
  },
  // {
  //   id: "orms-odms",
  //   name: "ODMs & ORMs",
  //   skills: ["Mongoose", "Prisma"],
  // },

  // apis & forms
  {
    id: "apis-data-fetching",
    name: "APIs & Data Fetching",
    skills: [
      "REST API's",
      "API Development",
      "TanStack Query",
      "Axios",
      "Postman",
    ],
  },
  {
    id: "forms-validation",
    name: "Forms & Validation",
    skills: ["React-Hook-Form", "Zod"],
  },

  // auth & payments
  {
    id: "authentication",
    name: "Authentication",
    skills: ["JWT", "Passport.js", "Cookies", "bcrypt"],
  },
  // {
  //   id: "payments",
  //   name: "Payments",
  //   skills: ["Stripe"],
  // },
  {
    id: "real-time-communication",
    name: "Real-time Communication",
    skills: ["WebSockets"],
  },

  // cloud and devops
  {
    id: "cloud-services",
    name: "Cloud Services",
    skills: ["AWS S3", "AWS EC2"],
  },
  {
    id: "devops-infrastructure",
    name: "DevOps & Infrastructure",
    // skills: ["Docker", "GitHub Actions", "Nginx", "Caddy"],
    skills: ["Docker", "GitHub Actions"],
  },

  // dev tools
  {
    id: "version-control",
    name: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    id: "package-managers",
    name: "Package Managers",
    skills: ["Yarn", "NPM", "PNPM"],
  },
  {
    id: "development-environment",
    name: "Development Environment",
    skills: ["Unix/Linux", "Terminal/CLI", "SSH", "Vim", "NVM"],
  },

  // deployment
  {
    id: "deployment",
    name: "Deployment",
    skills: ["Vercel", "Render", "GitHub Pages"],
  },

  // collaboration
  {
    id: "collaboration",
    name: "Collaboration",
    skills: ["Figma", "Slack", "Jira"],
  },
] as const;

export const skillsToLearn = ["Stripe", "Hono"] as const;

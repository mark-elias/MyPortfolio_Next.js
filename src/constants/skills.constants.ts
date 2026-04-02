export const skillCategories = [
  // core stack
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  // // runtimes
  // {
  //   id: "runtimes",
  //   name: "Runtimes",
  //   skills: ["Node.js", "Bun.js"],
  // },
  {
    id: "frontend-frameworks",
    name: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    id: "backend-frameworks",
    name: "Backend",
    skills: ["Nest.js", "Express.js", "Node.js", "Bun.js"],
  },
  // databases
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB", "MySQL"],
  },

  // apis
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
  // auth
  {
    id: "authentication",
    name: "Authentication",
    skills: ["JWT", "Passport.js", "Cookies"],
  },
  // cloud and devops
  {
    id: "cloud-services",
    name: "Cloud Services",
    skills: ["AWS EC2", "AWS S3"],
  },

  // devops
  {
    id: "devops-infrastructure",
    name: "DevOps & Infrastructure",
    // skills: ["Docker", "GitHub Actions", "Nginx", "Caddy"],
    skills: ["Docker", "GitHub Actions", "SSH", "NVM"],
  },
  {
    id: "version-control",
    name: "Version Control",
    skills: ["Git", "GitHub"],
  },
  // global state management
  {
    id: "state-management",
    name: "State Management",
    skills: ["Zustand", "Redux Toolkit"],
  },
  // forms
  {
    id: "forms-validation",
    name: "Forms & Validation",
    skills: ["React-Hook-Form", "Zod"],
  },

  // ui styling
  {
    id: "css-frameworks",
    name: "CSS & UI",
    skills: ["Tailwind", "Material UI", "shadcn/ui", "Chakra UI"],
  },

  // {
  //   id: "orms-odms",
  //   name: "ODMs & ORMs",
  //   skills: ["Mongoose", "Prisma"],
  // },

  // payments
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

  // dev tools
  {
    id: "package-managers",
    name: "Package Managers",
    skills: ["Yarn", "NPM", "PNPM", "Bun"],
  },
  // {
  //   id: "linux-and-environment",
  //   name: "Linux & Server Environment",
  //   skills: ["Unix/Linux", "Terminal/CLI", "SSH", "NVM"],
  // },

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

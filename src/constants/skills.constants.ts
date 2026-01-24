export const skillCategories = [
  // 🎯 TIER 1: CORE STACK (What you're hired for)
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

  // 🎨 TIER 2: UI & STYLING (Full-stack capability)
  {
    id: "css-frameworks",
    name: "CSS & UI",
    skills: ["Tailwind", "Material UI", "shadcn/ui", "Chakra UI"],
  },

  // 💾 TIER 3: DATA MANAGEMENT (Critical for real apps)
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB"],
  },
  {
    id: "state-management",
    name: "State Management",
    skills: ["Redux Toolkit"],
  },
  // {
  //   id: "orms-odms",
  //   name: "ODMs & ORMs",
  //   skills: ["Mongoose", "Prisma"],
  // },

  // 🔌 TIER 4: API & FORMS (Essential full-stack)
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

  // 🔐 TIER 5: BUSINESS LOGIC (Real-world experience)
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

  // ☁️ TIER 6: CLOUD & DEVOPS (Shows scalability knowledge)
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

  // 🛠️ TIER 7: DEVELOPMENT TOOLS (Supporting skills)
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

  // 🚀 TIER 8: DEPLOYMENT & COLLABORATION (Team readiness)
  {
    id: "deployment",
    name: "Deployment",
    skills: ["Vercel", "Render", "GitHub Pages"],
  },
  {
    id: "collaboration",
    name: "Collaboration",
    skills: ["Figma", "Slack", "Jira"],
  },
] as const;

export const skillsToLearn = [
  "Stripe",
  "Hono",
] as const;

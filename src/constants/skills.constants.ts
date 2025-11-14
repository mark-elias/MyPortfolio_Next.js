export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["Nest.js", "Node.js", "Bun.js", "Express.js"],
  },
  // Databases
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB"],
  },
  // Version Control
  {
    id: "version-control",
    name: "Version Control",
    skills: ["Git", "GitHub"],
  },
  // APIs & Data Fetching
  {
    id: "apis-data-fetching",
    name: "API's & Data Fetching",
    skills: [
      "REST API's",
      "API Development",
      "TanStack Query",
      "Axios",
      "Postman",
    ],
  },
  // Authentication
  {
    id: "authentication",
    name: "Authentication",
    skills: ["Passport.js", "jwt", "cookies", "bcrypt"],
  },

  {
    id: "css-frameworks",
    name: "CSS",
    skills: ["Tailwind", "Material UI", "Chakra UI", "Bootstrap"],
  },

  {
    id: "forms-validation",
    name: "Forms & Data Validation",
    skills: ["React-Hook-Form", "Zod"],
  },

  {
    id: "state-management",
    name: "Global State Management",
    skills: ["Redux Toolkit"],
  },

  // ORMS & ODMs
  // {
  //   id: "orms-odms",
  //   name: "ODMs & ORMs",
  //   skills: ["Mongoose", "Prisma"],
  // },

  {
    id: "cloud-services",
    name: "Cloud Services & Tools",
    skills: ["AWS S3"],
  },
  // Development Environment
  {
    id: "development-environment",
    name: "Development Environment",
    skills: ["Unix/Linux", "Terminal/CLI", "NVM", "Vim", "SSH"],
  },
  // Package Managers
  {
    id: "package-managers",
    name: "Package Managers",
    skills: ["NPM", "Yarn", "PNPM", "Bun", "Homebrew"],
  },
  // Deployment & Hosting
  {
    id: "deployment-hosting",
    name: "Deployment & Hosting",
    skills: ["Vercel", "Render", "Hostinger", "GitHub Pages"],
  },
  // Collaboration
  {
    id: "collaboration",
    name: "Collaboration",
    skills: ["Figma", "Slack", "Jira"],
  },
] as const;

export const skillsToLearn = [
  "Stripe payments",
  "Supabase",
  "Shadcn UI",
  "React Native",
  "Deno",
  "Docker",
] as const;

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["TypeScript"],
  },
  {
    id: "frontend-frameworks",
    name: "Frontend Frameworks",
    skills: ["React", "Next.js"],
  },
  {
    id: "backend-runtimes-frameworks",
    name: "Backend Runtimes & Frameworks",
    skills: ["Nest.js", "Node.js", "Bun.js", "Express.js"],
  },
  {
    id: "package-managers",
    name: "Package Managers",
    skills: ["NPM", "Yarn", "Bun", "Homebrew"],
  },
  {
    id: "css-frameworks",
    name: "CSS",
    skills: ["Tailwind", "Material UI", "Chakra UI", "Bootstrap"],
  },
  {
    id: "version-control",
    name: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    id: "forms-validation",
    name: "Forms & Data Validation",
    skills: ["React-Hook-Form", "Zod"],
  },
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
  {
    id: "state-management",
    name: "Global State Management",
    skills: ["Redux Toolkit"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB"],
  },
  {
    id: "orms-odms",
    name: "ODMs & ORMs",
    skills: ["Mongoose", "Prisma"],
  },
  // {
  //   id: "authentication",
  //   name: "Authentication",
  //   skills: ["Clerk", "NextAuth", "JWT", "Cookies", "bcrypt", "2FA/MFA"],
  // },
  {
    id: "deployment-hosting",
    name: "Deployment & Hosting",
    skills: ["Vercel", "Render", "Hostinger", "GitHub Pages"],
  },
  {
    id: "cloud-services",
    name: "Cloud Services & Tools",
    skills: ["AWS S3"],
  },
  {
    id: "development-environment",
    name: "Development Environment",
    skills: ["Unix/Linux", "Terminal/CLI", "NVM", "Vim", "SSH"],
  },
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
  "Bun",
] as const;

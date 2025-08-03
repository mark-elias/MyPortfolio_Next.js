type BadgeStyle = {
  backgroundColor: string;
  textColor: string;
};

const badgeMaker: { [key: string]: BadgeStyle } = {
  // Basics
  CSS: { backgroundColor: "#1572B6", textColor: "#FFFFFF" },
  HTML: { backgroundColor: "#E34F26", textColor: "#FFFFFF" },

  // Programming Languages
  JavaScript: { backgroundColor: "#F7DF1E", textColor: "#000000" },
  TypeScript: { backgroundColor: "#007ACC", textColor: "#FFFFFF" },

  // Frontend Frameworks
  React: { backgroundColor: "#61DAFB", textColor: "#000000" },
  "Next.js": { backgroundColor: "#000000", textColor: "#FFFFFF" },

  // Backend & Runtimes
  "Node.js": { backgroundColor: "#339933", textColor: "#FFFFFF" },
  "Bun.js": { backgroundColor: "#000000", textColor: "#FFFFFF" },

  // Backend Frameworks
  "Express.js": { backgroundColor: "#000000", textColor: "#FFFFFF" },
  "Nest.js": { backgroundColor: "#E0234E", textColor: "#FFFFFF" },

  // Package Managers
  NPM: { backgroundColor: "#CB3837", textColor: "#FFFFFF" },
  Yarn: { backgroundColor: "#2C8EBB", textColor: "#FFFFFF" },
  Bun: { backgroundColor: "#000000", textColor: "#FFFFFF" },
  Homebrew: { backgroundColor: "#FF6B35", textColor: "#FFFFFF" },

  // CSS
  Tailwind: { backgroundColor: "#06B6D4", textColor: "#FFFFFF" },
  "Material UI": { backgroundColor: "#0081CB", textColor: "#FFFFFF" },
  "Chakra UI": { backgroundColor: "#319795", textColor: "#FFFFFF" },
  Bootstrap: { backgroundColor: "#7952B3", textColor: "#FFFFFF" },

  // Forms & Data Validation
  "React-Hook-Form": { backgroundColor: "#EC5990", textColor: "#FFFFFF" },
  Zod: { backgroundColor: "#3F3D56", textColor: "#FFFFFF" },
  Joi: { backgroundColor: "#0A8A94", textColor: "#FFFFFF" },

  // APIs & Data Fetching
  "REST API's": { backgroundColor: "#f07f24", textColor: "#FFFFFF" },
  "API Development": { backgroundColor: "#1e293b", textColor: "#FFFFFF" },
  "TanStack Query": { backgroundColor: "#FF4154", textColor: "#FFFFFF" },
  Postman: { backgroundColor: "#FF6C37", textColor: "#FFFFFF" },
  Axios: { backgroundColor: "#5A29E4", textColor: "#FFFFFF" },

  // Global State Management
  Zustand: { backgroundColor: "#F0A500", textColor: "#FFFFFF" },
  "Redux Toolkit": { backgroundColor: "#764ABC", textColor: "#FFFFFF" },

  // Version Control
  Git: { backgroundColor: "#F05032", textColor: "#FFFFFF" },
  GitHub: { backgroundColor: "#181717", textColor: "#FFFFFF" },

  // Databases
  MongoDB: { backgroundColor: "#47A248", textColor: "#FFFFFF" },
  mySQL: { backgroundColor: "#00758F", textColor: "#FFFFFF" },
  PostgreSQL: { backgroundColor: "#336791", textColor: "#FFFFFF" },

  // ORMs & ODMs
  Mongoose: { backgroundColor: "#880000", textColor: "#FFFFFF" },
  Prisma: { backgroundColor: "#0C344B", textColor: "#FFFFFF" },

  // Authentication
  Clerk: { backgroundColor: "#3B82F6", textColor: "#FFFFFF" },
  NextAuth: { backgroundColor: "#000000", textColor: "#FFFFFF" },
  JWT: { backgroundColor: "#D63AFF", textColor: "#FFFFFF" },
  Cookies: { backgroundColor: "#FF6B35", textColor: "#FFFFFF" },
  bcrypt: { backgroundColor: "#3498DB", textColor: "#FFFFFF" },
  "2FA/MFA": { backgroundColor: "#1ABC9C", textColor: "#FFFFFF" },

  // Deployment & Hosting
  Vercel: { backgroundColor: "#000000", textColor: "#FFFFFF" },
  Render: { backgroundColor: "#46E3B7", textColor: "#000000" },
  Hostinger: { backgroundColor: "#3E1DDB", textColor: "#FFFFFF" },
  "GitHub Pages": { backgroundColor: "#181717", textColor: "#FFFFFF" },

  // Cloud Services & Tools
  "AWS S3": { backgroundColor: "#FF9900", textColor: "#000000" },

  // Tools & Environment
  Linux: { backgroundColor: "#FCC624", textColor: "#000000" },
  Docker: { backgroundColor: "#2496ED", textColor: "#FFFFFF" },
  NVM: { backgroundColor: "#339933", textColor: "#FFFFFF" },
  "Shell Scripting": { backgroundColor: "#4A90E2", textColor: "#FFFFFF" },
  "Command Line": { backgroundColor: "#2C3E50", textColor: "#FFFFFF" },
  SSH: { backgroundColor: "#E74C3C", textColor: "#FFFFFF" },
  "Vim/Neovim": { backgroundColor: "#019733", textColor: "#FFFFFF" },
  "VS Code": { backgroundColor: "#007ACC", textColor: "#FFFFFF" },
  WebStorm: { backgroundColor: "#000000", textColor: "#FFFFFF" },
  "Process Management": { backgroundColor: "#9B59B6", textColor: "#FFFFFF" },
  "Environment Variables": { backgroundColor: "#F39C12", textColor: "#FFFFFF" },

  // Other
  Figma: { backgroundColor: "#8B5CF6", textColor: "#FFFFFF" },
  Slack: { backgroundColor: "#4A154B", textColor: "#FFFFFF" },
  Jira: { backgroundColor: "#0052CC", textColor: "#FFFFFF" },
};

export const useBadgeMaker = (
  badges: readonly string[]
): { name: string; styles: BadgeStyle }[] => {
  const badgeStyles: { name: string; styles: BadgeStyle }[] = [];

  badges.forEach((b) => {
    badgeStyles.push({
      name: b, // Badge name to display
      styles: badgeMaker[b] || { backgroundColor: "#ccc", textColor: "#000" }, // Default if not found
    });
  });

  return badgeStyles;
};

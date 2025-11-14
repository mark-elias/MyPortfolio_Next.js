export const experience = [
  {
    id: "xenara-ai-lead",
    title: "Lead Full Stack Developer",
    company: "Xenara AI",
    type: "Contract",
    period: "Nov 2024 - Current",
    badges: [
      // Core Tech Stack
      "TypeScript",
      "Next.js",
      "React",
      "Nest.js",
      "MongoDB",
      "Mongoose",

      // Authentication & Security
      "JWT",
      "Cookies",
      "Passport.js",

      // API & Data Fetching
      "API Development",
      "TanStack Query",
      "Axios",

      // State Management & Forms
      "Redux Toolkit",
      "React-Hook-Form",
      "Zod",

      // Real-time & Cloud
      "WebSockets",
      "AWS S3",

      // Frontend Styling
      "Material UI",

      // Development Tools
      "Postman",
      "Git",
      "Yarn",

      // Collaboration Tools
      "Figma",
      "Slack",
      "Jira",
    ],
    responsibilities: [
      "Promoted to Lead Full Stack Developer, leading a team of 15+ developers over time and conducting 13+ technical interviews for intern candidates",
      "Mentored junior developers through onboarding, code reviews, and one-on-one meetings while establishing team best practices and Git workflows",
      "Led cross-functional collaboration with UI/UX, AI, DevOps, Marketing teams, and executive leadership to successfully deliver the startup's MVP on schedule",
      "Developed complete workspace invitation system with email integration, including backend APIs for sending HTML email invites and managing invite lifecycle (pending, accepted, archived)",
      "Built comprehensive workspace management UI for inviting teammates, viewing active users, tracking invite statuses, and handling user registration flow for invited users",
      "Built frontend authentication interface (login, registration pages) and integrated with existing backend JWT/cookie-based authorization system",
      "Built knowledge hub feature for multi-format resource uploads (websites, PDFs, JSON, APIs) with integration to AI team's ML server for processing",
      "Engineered full-stack AWS S3 integration for image/logo uploads, building backend APIs with Nest.js, configuring S3 bucket integration, and developing frontend upload UI",
      "Implemented WebSocket functionality for real-time updates and optimized settings page data fetching, reducing initial page load time from 2+ seconds to under 500ms (75%+ improvement)",
      "Refactored frontend architecture by implementing Redux Toolkit for global state management, eliminating prop drilling and improving code maintainability",
      "Built and maintained RESTful APIs with Nest.js, MongoDB, and Mongoose, designing database schemas and DTOs, implementing authentication guards, error handling, and API testing with Postman",
      "Integrated AI team's ML server APIs and developed forms with React-Hook-Form and Zod validation for user input handling and data integrity",
      "Developed integrations page, settings functionality, and various full-stack features end-to-end with TanStack Query and Axios for efficient data fetching",
      "Delivered 30+ approved pull requests for feature development across frontend and backend, maintaining high code quality and resolving 15+ bugs",
    ],
  },
  {
    id: "kreativstorm-frontend",
    title: "Front-End Developer",
    company: "Kreativstorm",
    type: "Internship",
    period: "August 2023 - October 2023",
    badges: ["HTML", "CSS", "JavaScript", "Git"],
    responsibilities: [
      "Collaborated with international teams on group projects, using HTML, CSS, and JavaScript to develop responsive frontend websites.",
      "Worked remotely with an industry expert, focusing on the importance of communication, collaboration, and best practices in web development.",
      "Utilized Git and GitHub for version control, enhancing teamwork and code management in a remote, global environment.",
    ],
  },
] as const;

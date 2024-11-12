// Define background colors for each technology
const badgeMaker: {
    [key: string]: { backgroundColor: string; textColor: string };
  } = {
    // Front End
    "React.js": { backgroundColor: "#61DAFB", textColor: "#000000" },
    TypeScript: { backgroundColor: "#007ACC", textColor: "#FFFFFF" },
    Tailwind: { backgroundColor: "#06B6D4", textColor: "#FFFFFF" },
  
    // Full Stack & Back End
    "Next.js": { backgroundColor: "#000000", textColor: "#FFFFFF" },
    "Node.js": { backgroundColor: "#339933", textColor: "#FFFFFF" },
    "Express.js": { backgroundColor: "#000000", textColor: "#FFFFFF" },
  
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
  
    // Version Control
    Git: { backgroundColor: "#F05032", textColor: "#FFFFFF" },
    GitHub: { backgroundColor: "#181717", textColor: "#FFFFFF" },
  
    // Databases
    MongoDB: { backgroundColor: "#47A248", textColor: "#FFFFFF" },
    mySQL: { backgroundColor: "#00758F", textColor: "#FFFFFF" },
    PostgreSQL: { backgroundColor: "#336791", textColor: "#FFFFFF" },
  
    // ORMs
    Mongoose: { backgroundColor: "#880000", textColor: "#FFFFFF" },
    Prisma: { backgroundColor: "#0C344B", textColor: "#FFFFFF" },
  
    // Authentication
    Clerk: { backgroundColor: "#3B82F6", textColor: "#FFFFFF" },
    NextAuth: { backgroundColor: "#000000", textColor: "#FFFFFF" },
  
    // Deployment & Hosting
    Vercel: { backgroundColor: "#000000", textColor: "#FFFFFF" },
    Render: { backgroundColor: "#46E3B7", textColor: "#000000" },
    Hostinger: { backgroundColor: "#3E1DDB", textColor: "#FFFFFF" },
    "GitHub Pages": { backgroundColor: "#181717", textColor: "#FFFFFF" },
  };

  export const useBadgeMaker = (badges: string[]) => {
// gonna map over each of the badges, and return an object for each of these badges
// the returned object will be a name (text to display for the badge)
// and the styling for the badge. background and textcolor
    return badges.map((b) => ({
      name: b,  // Badge name to display
      styles: badgeMaker[b] || { backgroundColor: "#ccc", textColor: "#000" },
    }));
  };
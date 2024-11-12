import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
  siteLink?: string;
  githubLink?: string;
  badges: string[];
}

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

function ProjectCard({
  image,
  alt,
  title,
  description,
  siteLink,
  githubLink,
  badges,
}: Props) {
  return (
    <div className="project-card">
      <div className="w-full h-[150px] relative">
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        ></Image>
      </div>
      <div className="p-3">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex gap-2">
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cool-link text-sm"
          >
            View Site
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cool-link text-sm"
          >
            GitHub Repo
          </a>
        </div>
        <div className="flex flex-wrap gap-1 mt-5 text-sm">
          {badges.map((b) => {
            const colors = badgeMaker[b] || {
              backgroundColor: "#ccc",
              textColor: "#000",
            }; // Default colors if not found
            return (
              <span
                key={b}
                className="cool-badge"
                style={{
                  backgroundColor: colors.backgroundColor,
                  color: colors.textColor,
                }}
              >
                {b}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

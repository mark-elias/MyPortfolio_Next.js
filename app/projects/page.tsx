import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard
          image="/images/mernBookstore_screenshot.png"
          alt="mern bookstore project screenshot"
          title="MERN Bookstore"
          description="MERN stack project with CRUD operations, validation, TypeScript, and TanStack Query"
          siteLink="https://mern-bookstore-olive.vercel.app/"
          githubLink="https://github.com/mark-elias/MERN_Bookstore"
          badges={[
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "TypeScript",
            "Git",
            "REST API's",
            "API Development",
            "TanStack Query",
            "React-Hook-Form",
            "Zod",
            "Joi",
            "Tailwind",
            "Mongoose",
            "Vercel",
            "Render",
          ]}
        ></ProjectCard>
        <ProjectCard
          image="/images/gameHub_screenshot.png"
          alt="game hub project screenshot"
          title="Game Hub"
          description="Game discovery project where you can filter and search for games. Uses Custom and Generic hooks"
          siteLink="https://game-hub-project-kappa.vercel.app/"
          githubLink="https://github.com/mark-elias/game-hub"
          badges={[
            "React",
            "TypeScript",
            "REST API's",
            "Axios",
            "Git",
            "Vercel",
          ]}
        ></ProjectCard>
      </div>
    </section>
  );
}

export default ProjectsPage;

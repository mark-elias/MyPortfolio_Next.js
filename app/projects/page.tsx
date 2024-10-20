import React from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  );
}

export default ProjectsPage;

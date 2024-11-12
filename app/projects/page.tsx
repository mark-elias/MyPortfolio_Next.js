import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard image="/images/expenseTracker_screenshot.png" alt="expense tracker screenshot" title="Expense Tracker"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
        <ProjectCard image="/images/gameHub_screenshot.png " alt="expense tracker screenshot" title="Game Hub"></ProjectCard>
      </div>
    </section>
  );
}

export default ProjectsPage;

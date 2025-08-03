import { ProjectCard } from "@/src/components/organisms";
import { projects } from "@/src/constants/projectCard.constants";

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            alt={project.alt}
            title={project.title}
            description={project.description}
            siteLink={project.siteLink}
            githubLink={project.githubLink}
            badges={project.badges}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

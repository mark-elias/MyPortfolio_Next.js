// constants
import { projects } from "@/constants/projectCard.constants";
// components
import { ProjectCard } from "@/components/organisms";

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
            {...(project.githubLinkTitle && {
              githubLinkTitle: project.githubLinkTitle,
            })}
            {...(project.secondGithubLink && {
              secondGithubLink: project.secondGithubLink,
            })}
            {...(project.secondGithubLinkTitle && {
              secondGithubLinkTitle: project.secondGithubLinkTitle,
            })}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

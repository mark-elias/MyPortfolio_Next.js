import Image from "next/image";
// assets
import { FaGithub } from "react-icons/fa";
import { TbWorldBolt } from "react-icons/tb";
// hooks
import { useBadgeMaker } from "@/hooks/useBadgeMaker";
// Project type/interface
import { Project } from "@/types/project";

function ProjectCard({
  image,
  alt,
  title,
  description,
  siteLink,
  githubLink,
  githubLinkTitle,
  secondGithubLink,
  secondGithubLinkTitle,
  badges,
}: Omit<Project, "id">) {
  // Hook for making badges
  const badgeStyles = useBadgeMaker(badges);

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
        <p className=" text-zinc-700 text-[14px]">{description}</p>
        <div className="flex gap-2 flex-wrap">
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cool-link"
          >
            <TbWorldBolt />
            View Site
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cool-link"
          >
            <FaGithub />
            {githubLinkTitle || "GitHub Repo"}
          </a>
          {secondGithubLink && (
            <a
              href={secondGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cool-link"
            >
              <FaGithub />
              {secondGithubLinkTitle || "GitHub Repo"}
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1 mt-7">
          {badgeStyles.map((badgeStyle) => (
            <span
              key={badgeStyle.name}
              className="cool-badge"
              style={{
                backgroundColor: badgeStyle.styles.backgroundColor,
                color: badgeStyle.styles.textColor,
              }}
            >
              {badgeStyle.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

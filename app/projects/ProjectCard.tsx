import { useBadgeMaker } from "@/hooks/useBadgeMaker";
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

function ProjectCard({
  image,
  alt,
  title,
  description,
  siteLink,
  githubLink,
  badges,
}: Props) {
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

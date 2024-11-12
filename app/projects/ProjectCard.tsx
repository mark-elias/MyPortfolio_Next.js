import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  alt: string;
  title: string;
}

function ProjectCard({ image, alt, title }: Props) {
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad a quam
          autem eveniet sapiente laborum vero mollitia odit? Quo maxime cum
          dicta, neque modi temporibus quas inventore dignissimos molestiae ad?
        </p>
        <div>
          <a href="https://google.com">View Site</a>
          <a href="https://github.com">GitHub Repo</a>
        </div>
        <div className="flex flex-wrap gap-1 mt-5">
          <a className="cool-span">javascript</a>
          <a className="cool-span">javascript</a>
          <a className="cool-span">javascript</a>
          <a className="cool-span">javascript</a>
          <a className="cool-span">javascript</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

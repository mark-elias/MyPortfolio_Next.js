import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  alt: string;
}

function ProjectCard({ image, alt }: Props) {
  return (
    <div className="project-card">
      <h3>project name</h3>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex gap-3 w-full h-[100px] md:h-[200px] md:w-[1] lg:h-[200px] border-2 border-red-400 relative">
          <Image
            src={image}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <p className="flex flex-wrap">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad a quam
          autem eveniet sapiente laborum vero mollitia odit? Quo maxime cum
          dicta, neque modi temporibus quas inventore dignissimos molestiae ad?
        </p>
      </div>
      <div className="flex flex-wrap gap-1 mt-5">
        <a className="cool-span">javascript</a>
        <a className="cool-span">javascript</a>
        <a className="cool-span">javascript</a>
        <a className="cool-span">javascript</a>
        <a className="cool-span">javascript</a>
      </div>
    </div>
  );
}

export default ProjectCard;

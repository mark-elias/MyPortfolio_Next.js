import React from "react";

function ProjectCard() {
  return (
    <div className="project-card">
      <h3>project name</h3>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex gap-3 min-w-[30%] border-2 border-red-400 overflow-auto">
          <img src="https://placehold.co/200x100/png"></img>
          <img src="https://placehold.co/75x100/png"></img>
          <img src="https://placehold.co/50x75/png"></img>
        </div>
        <p className="flex flex-wrap">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad a quam
          autem eveniet sapiente laborum vero mollitia odit? Quo maxime cum
          dicta, neque modi temporibus quas inventore dignissimos molestiae ad?
        </p>
      </div>
      <div className="flex gap-3">
        <a className="cool-link">javascript</a>
        <a className="cool-link">javascript</a>
        <a className="cool-link">javascript</a>
        <a className="cool-link">javascript</a>
        <a className="cool-link">javascript</a>
        <a className="cool-link">javascript</a>
      </div>
    </div>
  );
}

export default ProjectCard;

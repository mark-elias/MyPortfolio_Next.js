import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  siteLink?: string;
  githubLink?: string;
  githubLinkTitle?: string;
  secondGithubLink?: string;
  secondGithubLinkTitle?: string;
  badges: readonly string[];
}

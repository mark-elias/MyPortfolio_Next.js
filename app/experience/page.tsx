import { BadgeList } from "@/src/components/organisms";

function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <div className="exp-container">
        <div className="exp-card">
          <h2>Lead Full Stack Developer</h2>
          <span className="mr-5">Xenara AI</span>
          <span>Contract</span>
          <p className="text-sm">Nov 2024 - Current</p>
          <BadgeList
            badgeList={[
              "TypeScript",
              "Next.js",
              "React",
              "Material UI",
              "Tailwind",
              "Nest.js",
              "API Development",
              "AWS S3",
              "Postman",
              "Git",
              "MongoDB",
              "Figma",
            ]}
          />
          <ul className="list-disc ml-8 mt-5">
            <li>
              Promoted to Lead Full Stack Developer, mentoring new developers
              and coordinating technical archi- tecture
            </li>
            <li>
              Developed scalable applications using Next.js, TypeScript,
              Material UI, and TanStack Query with Zod validation
            </li>
            <li>
              Built RESTful APIs with Nest.js and MongoDB, implementing AWS S3
              integration for file uploads
            </li>
            <li>
              Transformed Figma designs into responsive UI components following
              Atomic Design principles
            </li>
            <li>
              Refactored and optimized code for scalability, maintainability,
              and best practices
            </li>
          </ul>
        </div>
        <div className="exp-card">
          <h2>Front-End Developer</h2>
          <span className="mr-5">Kreativstorm</span>
          <span>Internship</span>
          <p className="text-sm">August 2023 - October 2023</p>
          <BadgeList badgeList={["HTML", "CSS", "JavaScript", "Git"]} />
          <ul className="list-disc ml-8 mt-5">
            <li>
              Collaborated with international teams on group projects, using
              HTML, CSS, and JavaScript to develop responsive frontend websites.
            </li>
            <li>
              Worked remotely with an industry expert, focusing on the
              importance of communication, collabora- tion, and best practices
              in web development.
            </li>
            <li>
              Utilized Git and GitHub for version control, enhancing teamwork
              and code management in a remote, global environment.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;

import { BadgeList } from "@/src/components/organisms";

function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <div className="exp-container">
        <div className="exp-card">
          <h2>Full Stack Developer</h2>
          <span className="mr-5">Xenara AI</span>
          <span>Internship</span>
          <p className="text-sm">Nov 2024 - Current</p>
          <BadgeList
            badgeList={[
              "TypeScript",
              "Next.js",
              "Material UI",
              "Nest.js",
              "API Development",
              "Git",
              "MongoDB",
              "Figma",
              "Slack",
              "Jira",
            ]}
          />
          <ul className="list-disc ml-8 mt-5">
            <li>
              Built and maintained frontend components, pages, and UI systems
              using Next.js, TypeScript, and Material UI, following Atomic
              Design principles
            </li>
            <li>
              Developed and maintained backend services using Nest.js and
              MongoDB, designing RESTful APIs, handling data validation with
              DTOs, and implementing business logic in controllers and services.
            </li>
            <li>
              Collaborated with a remote team using Slack, Jira, Figma, and
              GitHub, contributing to agile development and effective
              communication.
            </li>
            <li>
              Translated Figma designs into responsive UI components, ensuring
              design consistency and accessibility.
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

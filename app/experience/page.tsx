import React from "react";

function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <div className="cool-div-container">
        <div className="exp-card">
          <h2 className="text-customAccent">Full Stack Developer</h2>
          <span className="mr-3">Internship</span>
          <span>Remote</span>
          <h3>Xenara AI | Nov 2024 - Current</h3>
          <ul className="list-disc ml-8">
            <li>
              Collaborated with a remote team to build the company site using
              Next.js, TypeScript, and Material UI
            </li>
            <li>
              Refactored the codebase to adhere to Atomic Design principles,
              ensuring consistent component organization
            </li>
            <li>Integrated Figma design assets into Material UI components</li>
          </ul>
        </div>
        <div className="exp-card">
          <h2 className="text-customAccent">Front-End Developer</h2>
          <span className="mr-3">Internship</span>
          <span>Remote</span>
          <h3>Kreativstorm | August 2023 - October 2023</h3>
          <ul className="list-disc ml-8">
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

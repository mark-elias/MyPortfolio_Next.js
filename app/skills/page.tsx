import React from "react";
import BadgeList from "./BadgeList";
function SkillsPage() {
  return (
    <section>
      <h1>Skills</h1>

      <div className="skills-container">
        <div className="skill-card">
          <h2>Front End</h2>
          <BadgeList badgeList={["React", "TypeScript"]} />
        </div>
        <div className="skill-card">
          <h2>CSS</h2>
          <BadgeList
            badgeList={["Tailwind", "Material UI", "Chakra UI", "Bootstrap"]}
          />
        </div>
        <div className="skill-card">
          <h2>Full Stack & Back End</h2>
          <BadgeList badgeList={["Next.js", "Node.js", "Express.js", "NPM"]} />
        </div>
        <div className="skill-card">
          <h2>Forms & Data Validation</h2>
          <BadgeList badgeList={["React-Hook-Form", "Zod", "Joi"]} />
        </div>
        <div className="skill-card">
          <h2>API&#39;s & Data Fetching</h2>
          <BadgeList
            badgeList={[
              "REST API's",
              "API Development",
              "TanStack Query",
              "Postman",
              "Axios",
            ]}
          />
        </div>
        <div className="skill-card">
          <h2>Version Control</h2>
          <BadgeList badgeList={["Git", "GitHub"]} />
        </div>
        <div className="skill-card">
          <h2>Databases</h2>
          <BadgeList badgeList={["MongoDB", "mySQL", "PostgreSQL"]} />
        </div>
        <div className="skill-card">
          <h2>ORM&#39;s</h2>
          <BadgeList badgeList={["Mongoose", "Prisma"]} />
        </div>
        {/* <div className="skill-card">
          <h2>Authentication</h2>
          <BadgeList badgeList={["Clerk", "NextAuth"]} />
        </div> */}
        <div className="skill-card">
          <h2>Deployment & Hosting</h2>
          <BadgeList
            badgeList={["Vercel", "Render", "Hostinger", "GitHub Pages"]}
          />
        </div>
        <div className="skill-card">
          <h2>Other</h2>
          <BadgeList badgeList={["Slack"]} />
        </div>
      </div>
      <p className="mt-12">
        👍 Still want to learn these: Stripe payments, Supabase, Shadcn UI,
        React Native, Deno, Bun
      </p>
    </section>
  );
}

export default SkillsPage;

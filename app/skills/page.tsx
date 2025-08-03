import BadgeList from "@/src/components/BadgeList";

function SkillsPage() {
  return (
    <section>
      <h1>Skills</h1>

      <div className="skills-container">
        <div className="skill-card">
          <h2>Languages</h2>
          <BadgeList badgeList={["TypeScript"]} />
        </div>
        <div className="skill-card">
          <h2>Full Stack</h2>
          <BadgeList badgeList={["Next.js"]} />
        </div>
        <div className="skill-card">
          <h2>Front End</h2>
          <BadgeList badgeList={["React"]} />
        </div>
        <div className="skill-card">
          <h2>Back End</h2>
          <BadgeList badgeList={["Node.js", "Express.js", "Nest.js"]} />
        </div>
        {/* <div className="skill-card">
          <h2>Package Managers</h2>
          <BadgeList badgeList={["NPM", "Yarn"]} />
        </div> */}
        <div className="skill-card">
          <h2>CSS</h2>
          <BadgeList
            badgeList={["Tailwind", "Material UI", "Chakra UI", "Bootstrap"]}
          />
        </div>
        <div className="skill-card">
          <h2>Version Control</h2>
          <BadgeList badgeList={["Git", "GitHub"]} />
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
              "Axios",
              "TanStack Query",
              "Postman",
            ]}
          />
        </div>
        {/* <div className="skill-card">
          <h2>Global State Management</h2>
          <BadgeList badgeList={["Zustand"]} />
        </div> */}
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
          <h2>Collaboration</h2>
          <BadgeList badgeList={["Figma", "Slack", "Jira"]} />
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

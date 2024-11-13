import React from "react";
import BadgeList from "./BadgeList";
function SkillsPage() {
  return (
    <section>
      <h1>Skills</h1>

      <div className="p-5">
        <h2>Front End</h2>
        <BadgeList badgeList={["React", "TypeScript", "Tailwind"]} />
        <h2>Full Stack and Back End</h2>
        <BadgeList badgeList={["Next.js", "Node.js", "Express.js"]} />
        <h2>Forms & Data Validation</h2>
        <BadgeList badgeList={["React-Hook-Form", "Zod", "Joi"]} />
        <h2>API's & Data Fetching</h2>
        <BadgeList
          badgeList={[
            "REST API's",
            "API Development",
            "TanStack Query",
            "Postman",
            "Axios",
          ]}
        />
        <h2>Version Control</h2>
        <BadgeList badgeList={["Git", "GitHub"]} />
        <h2>Databases</h2>
        <BadgeList badgeList={["MongoDB", "mySQL", "PostgreSQL"]} />
        <h2>ORM's</h2>
        <BadgeList badgeList={["Mongoose", "Prisma"]} />
        <h2>Authentication</h2>
        <BadgeList badgeList={["Clerk", "NextAuth"]} />
        <h2>Deployment & Hosting</h2>
        <BadgeList
          badgeList={["Vercel", "Render", "Hostinger", "GitHub Pages"]}
        />
        <p className="mt-8">
          👍 Still want to learn these: Stripe payments, Supabase, Shadcn UI,
          React Native, Deno, Bun
        </p>
      </div>
    </section>
  );
}

export default SkillsPage;

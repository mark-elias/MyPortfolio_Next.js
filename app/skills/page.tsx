import { BadgeList } from "@/src/components/organisms";
import {
  skillCategories,
  skillsToLearn,
} from "@/src/constants/skills.constants";

function SkillsPage() {
  return (
    <section>
      <h1>Skills</h1>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card">
            <h2>{category.name}</h2>
            <BadgeList badgeList={category.skills} />
          </div>
        ))}
      </div>
      <p className="mt-12">
        👍 Still want to learn these: {skillsToLearn.join(", ")}
      </p>
    </section>
  );
}

export default SkillsPage;

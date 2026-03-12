// constants
import { skillCategories, skillsToLearn } from "@/constants/skills.constants";
// components
import { BadgeList } from "@/components/organisms";

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
      <p className="mt-12 border border-customPrimary border-2 rounded-lg p-2">
        👍 Still want to learn these: {skillsToLearn.join(", ")}
      </p>
    </section>
  );
}

export default SkillsPage;

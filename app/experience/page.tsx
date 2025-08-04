import { BadgeList } from "@/src/components/organisms";
import { experience } from "@/src/constants/experience.constants";

function ExperiencePage() {
  return (
    <section>
      <h1>Experience</h1>
      <div className="exp-container">
        {experience.map((exp) => (
          <div key={exp.id} className="exp-card">
            <h2>{exp.title}</h2>
            <span className="mr-5">{exp.company}</span>
            <span>{exp.type}</span>
            <p className="text-sm">{exp.period}</p>
            <BadgeList badgeList={exp.badges} />
            <ul className="list-disc ml-8 mt-5">
              {exp.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;

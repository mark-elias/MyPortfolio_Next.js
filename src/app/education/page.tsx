import Image from "next/image";
// constants
import { education, educationImage } from "@/constants/education.constants";
// assets
import educationImageFile from "../../assets/images/education-image.jpg";

function EducationPage() {
  return (
    <section>
      <h1>Education</h1>
      <div className="edu-container">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <h2 className="border-b-8" style={{ borderColor: edu.borderColor }}>
              {edu.degree}
            </h2>
            <p>{edu.institution}</p>
            <p>Graduated {edu.graduationDate}</p>
          </div>
        ))}
        <div className="w-full h-[250px] flex justify-center rounded-lg mt-10 custom-shadow">
          <Image
            src={educationImageFile}
            alt={educationImage.alt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default EducationPage;

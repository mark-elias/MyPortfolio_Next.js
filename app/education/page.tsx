import Image from "next/image";
import React from "react";
import educationImage from "@/src/assets/images/education-image.jpg";

function EducationPage() {
  return (
    <section>
      <h1>Education</h1>
      <div className="edu-container">
        <div className="edu-card">
          <h2 className="border-b-8 border-red-500">
            Bachelor&#39;s degree, Computer Science
          </h2>
          <p>San Diego State University</p>
          <p>Graduated May 2023</p>
        </div>
        <div className="w-full h-[250px] flex justify-center rounded-lg mt-10 custom-shadow">
          <Image
            src={educationImage}
            alt="education image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default EducationPage;

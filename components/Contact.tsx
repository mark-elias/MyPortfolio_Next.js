import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import React from "react";

function Contact() {
  return (
    <section className="flex flex-col gap-3 lg:flex-row lg:justify-center lg:gap-10">
      <div className="flex items-center gap-1">
        <FaLocationDot></FaLocationDot>
        San Diego
      </div>
      <div className="flex items-center gap-1">
        <MdEmail></MdEmail>
        mark4elias@gmail.com
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/marcos-elias-382484226/"
          target="_blank"
          className="cool-link"
        >
          <FaLinkedin></FaLinkedin>LinkedIn
        </a>
      </div>
      <div>
        <a
          href="https://github.com/mark-elias"
          target="_blank"
          className="cool-link"
        >
          <FaGithub></FaGithub>GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;

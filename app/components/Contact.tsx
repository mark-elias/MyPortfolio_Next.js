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
      <a href="https://github.com" className="flex items-center gap-1">
        <FaLinkedin></FaLinkedin>LinkedIn
      </a>
      <a href="https://github.com" className="flex items-center gap-1">
        <FaGithub></FaGithub>GitHub
      </a>
    </section>
  );
}

export default Contact;

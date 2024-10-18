import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import React from "react";

function Contact() {
  return (
    <section className="flex justify-center gap-5">
      <div className="flex items-center gap-1">
        <MdEmail></MdEmail>
        <p>mark4elias@gmail.com</p>
      </div>
      <a
        href="https://github.com"
        className="flex items-center gap-1 bg-customPrimary"
      >
        <FaGithub></FaGithub>GitHub
      </a>
      <a href="https://github.com" className="flex items-center gap-1">
        <FaLinkedin></FaLinkedin>LinkedIn
      </a>
    </section>
  );
}

export default Contact;

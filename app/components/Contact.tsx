import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import React from "react";

function Contact() {
  return (
    <section className="flex justify-center">
      <div>
        <div className="text-center">
          <h3 className="italic">Full Stack Web Dev</h3>
          <h1>
            hello world, my name is{" "}
            <span className="italic text-customPrimary">Marcos</span>
          </h1>
        </div>
        <div className="">
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
        </div>
      </div>
    </section>
  );
}

export default Contact;

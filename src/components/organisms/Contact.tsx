// assets
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// constants
import { contactInfo } from "@/src/constants/contact.constants";

function Contact() {
  return (
    <section className="flex gap-7 justify-center flex-wrap">
      <div className="flex items-center gap-1">
        <FaLocationDot></FaLocationDot>
        {contactInfo.location}
      </div>
      <div className="flex items-center gap-1">
        <MdEmail></MdEmail>
        {contactInfo.email}
      </div>
      <div>
        <a href={contactInfo.linkedin} target="_blank" className="cool-link">
          <FaLinkedin></FaLinkedin>
          {contactInfo.linkedinText}
        </a>
      </div>
      <div>
        <a href={contactInfo.github} target="_blank" className="cool-link">
          <FaGithub></FaGithub>
          {contactInfo.githubText}
        </a>
      </div>
    </section>
  );
}

export default Contact;

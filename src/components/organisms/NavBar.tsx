"use client";
import { FaDev } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white top-0 sticky shadow-lg shadow-zinc-300/50 rounded-b-lg flex justify-between p-4 items-center z-50 ">
      <Link href="/" className="text-xl font-bold text-customPrimary">
        marcos elias
      </Link>

      {/* Mobile Button */}
      {!isOpen ? (
        <HiMenu
          onClick={() => toggleMenu()}
          className="lg:hidden text-2xl hover:scale-110"
        ></HiMenu>
      ) : (
        <IoClose
          onClick={() => toggleMenu()}
          className="lg:hidden text-3xl hover:scale-110"
        ></IoClose>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[62px] w-full flex justify-end left-0">
          <div className="bg-zinc-100 w-[200px] mr-[14px] rounded-b-2xl shadow-inner px-3 py-5 flex flex-col gap-1">
            <div>
              <Link href={"/experience"} className="nav-link">
                <FaDev />
                Experience
              </Link>
            </div>
            <div>
              <Link href={"/skills"} className="nav-link">
                <GiGuitarBassHead />
                Skills
              </Link>
            </div>
            <div>
              <Link href={"/projects"} className="nav-link">
                <FaLaptopCode />
                Projects
              </Link>
            </div>
            <div>
              <Link href={"/education"} className="nav-link">
                <FaGraduationCap />
                Education
              </Link>
            </div>
            <div>
              <Link href={"/certificates"} className="nav-link">
                <TbCertificate />
                Certificates
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8">
        <Link href="/experience" className="nav-link">
          <FaDev />
          Experience
        </Link>
        <Link href="/skills" className="nav-link">
          <GiGuitarBassHead />
          Skills
        </Link>
        <Link href="/projects" className="nav-link">
          <FaLaptopCode />
          Projects
        </Link>
        <Link href="/education" className="nav-link">
          <FaGraduationCap className="text-lg" />
          Education
        </Link>
        <Link href="/certificates" className="nav-link">
          <TbCertificate />
          Certificates
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

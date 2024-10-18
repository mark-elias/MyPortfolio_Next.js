"use client";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white top-0 sticky shadow-lg rounded-b-2xl flex justify-between p-4 items-center">
      <Link href="/" className="text-xl font-bold text-customPrimary">
        marcos elias
      </Link>

      {/* Mobile Button */}
      {!isOpen ? (
        <HiMenu
          onClick={() => toggleMenu()}
          className="md:hidden text-2xl hover:scale-110"
        ></HiMenu>
      ) : (
        <IoClose
          onClick={() => toggleMenu()}
          className="md:hidden text-3xl hover:scale-110"
        ></IoClose>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[60px] w-full flex justify-end left-0">
          <div className="bg-zinc-100 w-[150px] mr-[14px] rounded-b-2xl shadow-inner px-3 py-5">
            <div>
              <Link href={"/"} className="nav-link">
                Skills
              </Link>
            </div>
            <div>
              <Link href={"/"} className="nav-link">
                Education
              </Link>
            </div>
            <div>
              <Link href={"/"} className="nav-link">
                Projects
              </Link>
            </div>
            <div>
              <Link href={"/"} className="nav-link">
                Certificates
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import { useState } from "react";
// assets
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
// constants
import { navbarLinks, navbarBrand } from "@/src/constants/navbar.constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white top-0 sticky shadow-lg shadow-zinc-300/50 rounded-b-lg flex justify-between p-4 items-center z-50 ">
      <Link
        href={navbarBrand.href}
        className="text-xl font-bold text-customPrimary"
      >
        {navbarBrand.name}
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
            {navbarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.id}>
                  <Link href={link.href} className="nav-link">
                    <Icon />
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8">
        {navbarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.id} href={link.href} className="nav-link">
              <Icon className={link.id === "education" ? "text-lg" : ""} />
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-5 py-3 top-0 sticky shadow-xl rounded-b-xl bg-white">
      <div>
        <Link href="/" className="text-2xl text-customPrimary">marcos elias</Link>
      </div>
      <div className="flex gap-5">
        <Link href="/">Skills</Link>
        <Link href="/">Education</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Certificates</Link>
      </div>
    </nav>
  );
}

export default NavBar;

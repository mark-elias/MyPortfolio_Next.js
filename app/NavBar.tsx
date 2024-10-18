import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-pink-200 px-5 py-1">
      <div>
        <Link href="/">Cool Logo</Link>
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

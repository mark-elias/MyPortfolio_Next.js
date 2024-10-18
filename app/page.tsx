import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Big Header</h1>
      <h2>Medium Header</h2>
      <h3>Small Header</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        numquam quisquam voluptate doloribus quasi quam ullam, dolore ab impedit
      </p>
      <Link href={"/"} className="git-link">
        GitHub Repo
      </Link>
      <Link href={"/"} className="site-link">
        View Site
      </Link>
    </div>
  );
}

export default HomePage;

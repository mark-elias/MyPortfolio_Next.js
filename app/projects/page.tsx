import ProjectCard from "@/src/components/ProjectCard";
import portfolioScreenshot from "@/src/assets/images/portfolio_screenshot.png";
import mernBookstoreScreenshot from "@/src/assets/images/mernBookstore_screenshot.png";
import gameHubScreenshot from "@/src/assets/images/gameHub_screenshot.png";
import expenseTrackerScreenshot from "@/src/assets/images/expenseTracker_screenshot.png";
import restaurantScreenshot from "@/src/assets/images/restaurant_screenshot.png";
import rockPaperScissorsScreenshot from "@/src/assets/images/rockPaperScissors_screenshot.png";
import kreativstormProjectScreenshot from "@/src/assets/images/kreativstormProject_screenshot.png";
import weatherProjectScreenshot from "@/src/assets/images/weatherProject_screenshot.png";

function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard
          image={portfolioScreenshot}
          alt="marcos elias portfolio project screenshot"
          title="My Portfolio"
          description="Remade my portfolio with Next.js (previously built with React) so that it is easier to maintain and update. "
          siteLink="https://marcoseliasportfolio.com"
          githubLink="https://github.com/mark-elias/MyPortfolio_Next.js"
          badges={["Next.js", "TypeScript", "Tailwind", "Git", "Vercel"]}
        ></ProjectCard>
        <ProjectCard
          image={mernBookstoreScreenshot}
          alt="mern bookstore project screenshot"
          title="MERN Bookstore"
          description="MERN stack project with CRUD operations, validation, TypeScript, and TanStack Query"
          siteLink="https://mern-bookstore-olive.vercel.app/"
          githubLink="https://github.com/mark-elias/MERN_Bookstore"
          badges={[
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "TypeScript",
            "Git",
            "REST API's",
            "API Development",
            "TanStack Query",
            "React-Hook-Form",
            "Zod",
            "Joi",
            "Tailwind",
            "Mongoose",
            "Vercel",
            "Render",
          ]}
        ></ProjectCard>
        <ProjectCard
          image={gameHubScreenshot}
          alt="game hub project screenshot"
          title="Game Hub"
          description="Game discovery project where you can filter and search for games. Uses Custom and Generic hooks"
          siteLink="https://game-hub-project-kappa.vercel.app/"
          githubLink="https://github.com/mark-elias/game-hub"
          badges={[
            "React",
            "TypeScript",
            "Chakra UI",
            "REST API's",
            "Axios",
            "Git",
            "Vercel",
          ]}
        ></ProjectCard>
        <ProjectCard
          image={expenseTrackerScreenshot}
          alt="expense tracker project screenshot"
          title="Expense Tracker"
          description="Uses React Hook Form and Zod for Validation. You can add, sort, and delete expenses"
          siteLink="https://react-budgeter-project.vercel.app/"
          githubLink="https://github.com/mark-elias/Expense_Tracker"
          badges={[
            "React",
            "TypeScript",
            "Tailwind",
            "React-Hook-Form",
            "Zod",
            "Git",
            "Vercel",
          ]}
        ></ProjectCard>
        <ProjectCard
          image={restaurantScreenshot}
          alt="Restaurant project screenshot"
          title="Restaurant Project"
          description="Multipage site showcasing my CSS skills. Improved performance with smaller images and semantic HTML. Made the site responsive, added persistent Dark Mode"
          siteLink="https://mark-elias.github.io/Restaurant_Project.github.io/"
          githubLink="https://github.com/mark-elias/Restaurant_Project.github.io"
          badges={["CSS", "JavaScript", "HTML", "Git", "GitHub Pages"]}
        ></ProjectCard>
        <ProjectCard
          image={rockPaperScissorsScreenshot}
          alt="Rock Paper Scissors project screenshot"
          title="JS Rock Paper Scissors"
          description="Used unique border radius styling, added a scoreboard, and ensured mobile/tablet compatibility. JavaScript was fun and challenging; helper functions improved readability."
          siteLink="https://mark-elias.github.io/RockPaperScissors.github.io/"
          githubLink="https://github.com/mark-elias/RockPaperScissors.github.io"
          badges={["JavaScript", "CSS", "Git", "GitHub Pages"]}
        ></ProjectCard>
        <ProjectCard
          image={kreativstormProjectScreenshot}
          alt="Kreativstorm group project screenshot"
          title="Kreativstorm Group Project"
          description="Group project in Kreativstorm's Front End training with international students. Enjoyed collaborating across cultures. Responsible for creating the 'Matches' page."
          siteLink="https://second-assignment-kreativstorm.vercel.app/pages/matches.html"
          githubLink="https://github.com/joaopedro-vidal/second-assignment-kreativstorm?tab=readme-ov-file"
          badges={["HTML", "CSS", "Git", "Vercel"]}
        ></ProjectCard>
        <ProjectCard
          image={weatherProjectScreenshot}
          alt="Weather API project screenshot"
          title="Weather API Project"
          description="First API project. It was challenging trying to understand the syntax of Async Javascript. Experimented with glassmorphism and CSS tricks. Will continue practicing API skills."
          siteLink="https://mark-elias.github.io/WeatherProject.github.io/"
          githubLink="https://github.com/mark-elias/WeatherProject.github.io"
          badges={[
            "HTML",
            "CSS",
            "JavaScript",
            "REST API's",
            "Git",
            "GitHub Pages",
          ]}
        ></ProjectCard>
      </div>
    </section>
  );
}

export default ProjectsPage;

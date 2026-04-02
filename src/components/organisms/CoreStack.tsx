// badges
import { BadgeList } from "@/components/organisms";

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "MongoDB",
  "MySQL",
  "AWS",
  "Docker",
  "Git",
];

function CoreStack() {
  return (
    <section className="flex justify-center">
      <BadgeList badgeList={coreStack} />
    </section>
  );
}

export default CoreStack;

import { useBadgeMaker } from "@/hooks/useBadgeMaker";

interface Props {
  badgeList: string[];
}

function BadgeList({ badgeList }: Props) {
  const badgeStyles = useBadgeMaker(badgeList);

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {badgeStyles.map((badgeStyle) => (
        <span
          key={badgeStyle.name}
          className="cool-badge"
          style={{
            backgroundColor: badgeStyle.styles.backgroundColor || "#ccc",
            color: badgeStyle.styles.textColor || "#000",
          }}
        >
          {badgeStyle.name}
        </span>
      ))}
    </div>
  );
}

export default BadgeList;
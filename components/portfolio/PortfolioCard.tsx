import { useState } from "react";
import { ProjectType } from "@/types/portfolio";
import { PortfolioCardVideo } from "./PortfolioCardVideo";
import { PortfolioCardImage } from "./PortfolioCardImage";
import { PortfolioCardShort } from "./PortfolioCardShort";
import { PortfolioAnimationCard } from "./PortfolioAnimationCard";
import { PortfolioCardWeb } from "./PortfolioCardWeb";

interface PortfolioCardProps {
  project: ProjectType;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardComponent = {
    video: PortfolioCardVideo,
    short: PortfolioCardShort,
    image: PortfolioCardImage,
    animation: PortfolioAnimationCard,
    web: PortfolioCardWeb,
  }[project.type];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardComponent project={project} isHovered={isHovered} />
    </div>
  );
}

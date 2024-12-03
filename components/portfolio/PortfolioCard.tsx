import { useState } from "react";
import { ProjectType } from "@/types/portfolio";
import { PortfolioCardVideo } from "./PortfolioCardVideo";
import { PortfolioCardImage } from "./PortfolioCardImage";
import { PortfolioCardShort } from "./PortfolioCardShort";
import { PortfolioAnimationCard } from "./PortfolioAnimationCard";

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

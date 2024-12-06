import { useState } from "react";
import { ProjectType } from "@/types/portfolio";
import dynamic from "next/dynamic";

// Dynamic imports for card components
const CardComponents = {
  video: dynamic(
    () =>
      import("./PortfolioCardVideo").then((mod) => ({
        default: mod.PortfolioCardVideo,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  short: dynamic(
    () =>
      import("./PortfolioCardShort").then((mod) => ({
        default: mod.PortfolioCardShort,
      })),
    {
      loading: () => <div className="aspect-[9/16] bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  image: dynamic(
    () =>
      import("./PortfolioCardImage").then((mod) => ({
        default: mod.PortfolioCardImage,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  animation: dynamic(
    () =>
      import("./PortfolioAnimationCard").then((mod) => ({
        default: mod.PortfolioAnimationCard,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  web: dynamic(
    () =>
      import("./PortfolioCardWeb").then((mod) => ({
        default: mod.PortfolioCardWeb,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
};

interface PortfolioCardProps {
  project: ProjectType;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const CardComponent = CardComponents[project.type];

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

import { useState } from "react";
import { ProjectType } from "@/types/portfolio";
import dynamic from "next/dynamic";

// Dynamic imports for card components
const CardComponents = {
  video: dynamic(
    () =>
      import("./video-card").then((mod) => ({
        default: mod.VideoCard,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  short: dynamic(
    () =>
      import("./short-card").then((mod) => ({
        default: mod.ShortCard,
      })),
    {
      loading: () => <div className="aspect-[9/16] bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  image: dynamic(
    () =>
      import("./image-card").then((mod) => ({
        default: mod.ImageCard,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  animation: dynamic(
    () =>
      import("./animation-card").then((mod) => ({
        default: mod.AnimationCard,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
  web: dynamic(
    () =>
      import("./web-card").then((mod) => ({
        default: mod.WebCard,
      })),
    {
      loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
      ssr: false,
    }
  ),
};

interface CardProps {
  project: ProjectType;
}

export default function Card({ project }: CardProps) {
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

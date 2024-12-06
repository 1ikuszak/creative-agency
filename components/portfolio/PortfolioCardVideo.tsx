import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/types/portfolio";
import { PortfolioOverlayInfo } from "./PortfolioOverlayInfo";

interface PortfolioCardVideoProps {
  project: ProjectType;
  isHovered?: boolean;
}

export function PortfolioCardVideo({
  project,
  isHovered,
}: PortfolioCardVideoProps) {
  if (!project.videoUrl || !project.imageUrl) {
    return null;
  }

  return (
    <Link
      href={project.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title || "Video thumbnail"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm group-hover:border-white">
          <svg
            className="w-4 h-4 text-white/80 group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            <path d="M9 6l8 6-8 6V6z" />
          </svg>
        </div>
      </div>
      {project.tags && <PortfolioOverlayInfo project={project} />}
    </Link>
  );
}

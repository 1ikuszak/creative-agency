import { ProjectType } from "@/types/portfolio";
import { useState } from "react";
import { PortfolioOverlayInfo } from "./PortfolioOverlayInfo";

interface PortfolioCardVideoProps {
  project: ProjectType;
  isHovered: boolean;
}

export function PortfolioCardVideo({ project }: PortfolioCardVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="relative aspect-video bg-black/80 border border-white/10 overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Video Thumbnail or Placeholder */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {project.youtubeId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=${
              isPlaying ? "1" : "0"
            }&mute=0&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={isPlaying ? "" : "pointer-events-none"}
          />
        ) : (
          <pre className="text-white/20 font-mono text-xs whitespace-pre">
            {`╔══════════════════════╗
║     VIDEO CONTENT     ║
║    16:9 ASPECT RATIO  ║
╚══════════════════════╝`}
          </pre>
        )}
      </div>

      {/* Overlay Info - Only show when not playing */}
      {project.tags && <PortfolioOverlayInfo project={project} />}
    </div>
  );
}

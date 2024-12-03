import { ProjectType } from "@/types/portfolio";
import { useRef, useEffect } from "react";

interface PortfolioVideoCardShortProps {
  project: ProjectType;
}

export function PortfolioCardShort({ project }: PortfolioVideoCardShortProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="relative aspect-[9/16] bg-black/80 border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {project.videoUrl ? (
          <div className="w-full h-full relative">
            <video
              ref={videoRef}
              src={project.videoUrl}
              className="w-full h-full object-cover"
              loop
              playsInline
              preload="auto"
              poster={project.thumbnailUrl}
              controls
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/40 font-mono text-sm">
              Video not available
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { ProjectType } from "@/types/portfolio";
import { useRef, useEffect } from "react";
import { PortfolioOverlayInfo } from "./PortfolioOverlayInfo";

interface PortfolioAnimationCardProps {
  project: ProjectType;
}

export function PortfolioAnimationCard({
  project,
}: PortfolioAnimationCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <div className="relative h-full bg-black/80 border border-white/10 overflow-hidden">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              playsInline
              preload="auto"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/40 font-mono text-sm">
                Video not available
              </div>
            </div>
          )}
          {project.tags && (
            <PortfolioOverlayInfo project={project} position={"top"} />
          )}
        </div>
      </div>
    </div>
  );
}

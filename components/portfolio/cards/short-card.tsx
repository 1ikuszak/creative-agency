import { ProjectType } from "@/types/portfolio";
import { useRef, useEffect } from "react";
import { PortfolioOverlayInfo } from "../PortfolioOverlayInfo";
import Image from "next/image";

interface ShortCardProps {
  project: ProjectType;
}

export function ShortCard({ project }: ShortCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div className="relative aspect-[9/16] bg-black/80 border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {project.videoUrl && project.imageUrl ? (
          <div className="w-full h-full relative">
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.imageUrl}
              className="w-full h-full object-cover"
              loop
              playsInline
              preload="auto"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title || "Project thumbnail"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-white/40 font-mono text-sm">
            Media not available
          </div>
        )}
      </div>

      {project.tags && (
        <PortfolioOverlayInfo project={project} position={"top"} />
      )}
    </div>
  );
}

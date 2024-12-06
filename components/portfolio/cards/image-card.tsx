import { ProjectType } from "@/types/portfolio";
import Image from "next/image";
import { PortfolioOverlayInfo } from "../PortfolioOverlayInfo";

interface ImageCardProps {
  project: ProjectType;
  isHovered: boolean;
}

export function ImageCard({ project, isHovered }: ImageCardProps) {
  return (
    <div
      className="relative aspect-square bg-black/80 border border-white/10 overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Image with Next.js optimization */}
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title || "Portfolio Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover select-none"
          priority={false}
          quality={75}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {/* Overlay Info */}
      <div className="pointer-events-none">
        <PortfolioOverlayInfo project={project} />
      </div>

      {/* System Status */}
      <div className="absolute top-4 left-4 text-left pointer-events-none">
        <pre className="text-white/30 font-mono text-[10px] leading-none">
          {`► IMG: ${isHovered ? "SCANNING" : "LOADED"}
► RES: 1080x1080
► TYPE: STILL`}
        </pre>
      </div>
    </div>
  );
}

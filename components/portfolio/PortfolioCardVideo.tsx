import { ProjectType } from "@/types/portfolio";
import { useState } from "react";

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
      {!isPlaying && project.tags && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="font-mono text-xs text-white/40">
                {project.id}
              </div>
              {project.year && (
                <div className="font-mono text-xs text-white/40">
                  {project.year}
                </div>
              )}
            </div>
            {project.title && (
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
            )}
            <div className="flex flex-wrap gap-1">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 bg-white/10 text-white/60 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* System Status */}
      <div className="absolute top-4 right-4 text-right">
        <pre className="text-white/30 font-mono text-[10px] leading-none">
          {`► FPS: ${project.fps || 60}
► RES: ${project.resolution || "1920x1080"}`}
        </pre>
      </div>

      {/* Play Button Overlay - Only show when not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

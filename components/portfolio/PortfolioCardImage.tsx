import { ProjectType } from "@/types/portfolio";
import Image from "next/image";

interface PortfolioCardImageProps {
  project: ProjectType;
  isHovered: boolean;
}

export function PortfolioCardImage({
  project,
  isHovered,
}: PortfolioCardImageProps) {
  return (
    <div className="relative aspect-square bg-black/80 border border-white/10 overflow-hidden">
      {/* Image or Placeholder */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title || "test"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <pre className="text-white/20 font-mono text-xs whitespace-pre">
            {`┌────────────┐
│  ▣▣▣▣▣▣▣▣  │
│  ▣      ▣  │
│  ▣  1:1  ▣  │
│  ▣      ▣  │
│  ▣▣▣▣▣▣▣▣  │
└────────────┘`}
          </pre>
        )}
      </div>

      {/* Overlay Info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="font-mono text-xs text-white/40">{project.id}</div>
            <div className="font-mono text-xs text-white/40">
              {project.year}
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/10 text-white/60 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="absolute top-4 right-4 text-right">
        <pre className="text-white/30 font-mono text-[10px] leading-none">
          {`► IMG: ${isHovered ? "SCANNING" : "LOADED"}
► RES: 1080x1080
► TYPE: STILL`}
        </pre>
      </div>
    </div>
  );
}

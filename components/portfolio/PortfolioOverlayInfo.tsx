import { ProjectType } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioOverlayInfoProps {
  project: ProjectType;
  darkGradient?: boolean;
  position?: "top" | "bottom";
}

export function PortfolioOverlayInfo({
  project,
  darkGradient = false,
  position = "bottom",
}: PortfolioOverlayInfoProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none p-4 flex flex-col",
        position === "top" ? "justify-start" : "justify-end",
        darkGradient
          ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          : ""
      )}
    >
      <div className="space-y-2">
        {position === "bottom" && (
          <div className="font-mono text-sm text-white/80">
            <span>{project.year}</span>
          </div>
        )}
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
        {position === "top" && (
          <div className="font-mono text-sm text-white/80">
            <span>{project.year}</span>
          </div>
        )}
      </div>
    </div>
  );
}

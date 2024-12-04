import { ProjectType } from "@/types/portfolio";

interface PortfolioOverlayInfoProps {
  project: ProjectType;
}

export function PortfolioOverlayInfo({ project }: PortfolioOverlayInfoProps) {
  return (
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="font-mono text-xs text-white/40">{project.year}</div>
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
  );
}

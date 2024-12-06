import { ProjectType } from "@/types/portfolio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { PortfolioOverlayInfo } from "../PortfolioOverlayInfo";
import Link from "next/link";

interface WebCardProps {
  project: ProjectType;
  isHovered: boolean;
}

export function WebCard({ project, isHovered }: WebCardProps) {
  return (
    <div
      className="relative aspect-video overflow-hidden border border-black"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Image with Next.js optimization */}
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title || "Website Preview"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover select-none"
          priority={true}
          quality={75}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {/* Top Content */}
      <div className="absolute justify-between top-0 w-full flex z-10 p-2">
        {/* Status Display */}
        <pre className="text-white/30 text-left text-[10px] leading-none">
          {`► SYS: ${isHovered ? "READY" : "STANDBY"}
► NET: CONNECTED
► SEC: VERIFIED`}
        </pre>

        {/* Website Link Button */}
        {project.websiteUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="gap-2 rounded-none"
          >
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-4 h-4" />
              Visit Site
            </Link>
          </Button>
        )}
      </div>

      {/* Portfolio Overlay Info */}
      {project.tags && <PortfolioOverlayInfo project={project} />}
    </div>
  );
}

import { ProjectType } from "@/types/portfolio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { PortfolioOverlayInfo } from "./PortfolioOverlayInfo";
import Link from "next/link";

interface PortfolioCardWebProps {
  project: ProjectType;
  isHovered: boolean;
}

export function PortfolioCardWeb({
  project,
  isHovered,
}: PortfolioCardWebProps) {
  return (
    <div className="relative aspect-video overflow-hidden">
      {/* Image with Next.js optimization */}
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title || "Website Preview"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
          quality={75}
        />
      )}

      {/* Top Content */}
      <div className="absolute top-0 w-full flex justify-between items-start z-10 p-4">
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

        {/* Status Display */}
        <pre className="text-white/30 text-right text-[10px] leading-none">
          {`► SYS: ${isHovered ? "READY" : "STANDBY"}
► NET: CONNECTED
► SEC: VERIFIED`}
        </pre>
      </div>

      {/* Portfolio Overlay Info */}
      {project.tags && <PortfolioOverlayInfo project={project} />}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/types/portfolio";

interface PortfolioCardVideoProps {
  project: ProjectType;
}

export function PortfolioCardVideo({ project }: PortfolioCardVideoProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${project.youtubeId}`;

  return (
    <Link
      href={youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >
      <div className="relative w-full aspect-video">
        <Image
          src={thumbnailUrl}
          alt={`${project.title} video thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
        <svg
          className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </Link>
  );
}

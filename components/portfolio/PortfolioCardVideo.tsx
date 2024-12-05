import { ProjectType } from "@/types/portfolio";
import { useState, useCallback, useEffect } from "react";
import { PortfolioOverlayInfo } from "./PortfolioOverlayInfo";
import Image from "next/image";

interface PortfolioCardVideoProps {
  project: ProjectType;
  isHovered: boolean;
}

export function PortfolioCardVideo({ project }: PortfolioCardVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cookiePreference, setCookiePreference] = useState<boolean | null>(
    null
  );
  const [thumbnailError, setThumbnailError] = useState(false);

  // Check for stored cookie preference on mount
  useEffect(() => {
    const storedPreference = localStorage.getItem("youtube-cookie-preference");
    if (storedPreference) {
      setCookiePreference(storedPreference === "accepted");
    }
  }, []);

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  const handleCookieConsent = useCallback(async () => {
    try {
      // Modern cookie consent dialog
      const result = await window.confirm(
        "This video player uses YouTube's embedded player which may use cookies for playback and analytics. Would you like to:\n\n" +
          "• Allow YouTube cookies for better video playback\n" +
          "• Enable video statistics\n" +
          "• Save this preference for future visits\n\n" +
          "You can change this setting at any time."
      );

      // Store preference
      localStorage.setItem(
        "youtube-cookie-preference",
        result ? "accepted" : "declined"
      );
      setCookiePreference(result);

      if (result) {
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error handling cookie consent:", error);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (cookiePreference === null) {
      handleCookieConsent();
    } else if (cookiePreference) {
      setIsPlaying(true);
    } else {
      // Show message for users who declined cookies
      window.alert(
        "You've previously declined YouTube cookies. To watch videos, you'll need to accept cookies or watch directly on YouTube."
      );
    }
  }, [cookiePreference, handleCookieConsent]);

  const getYouTubeEmbedUrl = (youtubeId: string) => {
    const baseUrl = "https://www.youtube.com/embed/";
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      controls: "1",
      modestbranding: "1",
      playsinline: "1",
      rel: "0",
      enablejsapi: "1",
      // Add privacy-enhanced mode
      host: "https://www.youtube-nocookie.com",
    });

    return `${baseUrl}${youtubeId}?${params.toString()}`;
  };

  const handleWatchOnYouTube = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.youtubeUrl) {
      window.open(project.youtubeUrl, "_blank");
    }
  };

  return (
    <div
      className="relative aspect-video bg-black/80 border border-white/10 overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        {project.youtubeId ? (
          isPlaying && cookiePreference ? (
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(project.youtubeId)}
              title={project.title || "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          ) : (
            <div className="relative w-full h-full">
              {/* Custom Thumbnail */}
              {project.thumbnailUrl ? (
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title || "Video thumbnail"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              ) : (
                !thumbnailError && (
                  <Image
                    src={getYouTubeThumbnail(project.youtubeId)}
                    alt={project.title || "Video thumbnail"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                    onError={() => setThumbnailError(true)}
                  />
                )
              )}

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="transform scale-75 group-hover:scale-100 transition-transform">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Play Video
                </span>
                {cookiePreference === false && (
                  <button
                    onClick={handleWatchOnYouTube}
                    className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-none text-sm transition"
                  >
                    Watch on YouTube
                  </button>
                )}
              </div>
            </div>
          )
        ) : (
          <pre className="text-white/20 font-mono text-xs whitespace-pre">
            {`╔══════════════════════╗
║   VIDEO UNAVAILABLE  ║
╚══════════════════════╝`}
          </pre>
        )}
      </div>

      {/* Overlay Info - Only show when not playing */}
      {!isPlaying && project.tags && <PortfolioOverlayInfo project={project} />}
    </div>
  );
}

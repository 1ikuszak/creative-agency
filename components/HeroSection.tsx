"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have Button
import { cn } from "@/lib/utils"; // Assuming you have cn utility

// Define a basic ProjectType interface if not already imported
interface ProjectType {
  title: string;
  year: number | string;
  tags?: string[];
  videoUrl?: string;
  imageUrl?: string;
}

// --- Your Hero Section Component ---
export function HeroSection() {
  // --- Video Logic ---
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoProject] = useState<ProjectType>({
    title: "",
    year: 2024,
    tags: ["Animation", "Motion"],
    videoUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/japan_2_big.mp4",
    imageUrl: "/your-video-poster.jpg", // <-- Replace
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);

  // --- Image Card Logic ---
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [imageProject] = useState<ProjectType>({
    title: "",
    year: 2023,
    tags: ["Web Design", "Brand"],
    imageUrl: "https://drewmp.s3.eu-north-1.amazonaws.com/optimized_fhd_A2.png",
  });
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-3 md:px-5 lg:px-7 py-16 md:py-20"
    >
      {/* Background Layer */}
      <div className="overflow-hidden absolute inset-0 w-full -z-10">
        <div
          className="h-full w-full relative"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: `url('/leather.png')`,
            backgroundRepeat: "repeat",
            imageRendering: "crisp-edges",
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            opacity: 0.95,
          }}
        />
      </div>

      {/* Availability Banner */}
      <div className="absolute top-0 left-0 right-0 bg-white/80 border-y border-black/10 backdrop-blur-sm py-1 z-20">
        {/* ... banner content ... */}
        <div className="container mx-auto flex items-center justify-center">
          <div className="hidden md:block text-black font-mono text-[10px]">
            <pre className="leading-none">{`  [!] LIMITED AVAILABILITY - WE ARE TAKING ONLY 2 CLIENTS PER MONTH [!]  `}</pre>
          </div>
          <div className="md:hidden text-black font-mono text-[10px]">
            <pre className="leading-none">{`[!] WE ARE TAKING ONLY 2 CLIENTS PER MONTH [!]`}</pre>
          </div>
        </div>
      </div>

      {/* ASCII Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* ... ASCII art ... */}
        <div className="absolute top-8 left-8 text-black/40">
          <pre className="font-mono text-xs leading-none">{`╔═══╗  * ˚\n║███║ *✧⋆\n╚═══╝  ⋆ ˚`}</pre>
        </div>
        <div className="absolute bottom-8 left-8 text-black/40">
          <pre className="font-mono text-xs leading-none">{`▀▒░ ◢◤ ░▒▓\n◢██████◤\n▀▀▀◥◤▀▀▀`}</pre>
        </div>
        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-black/40">
          <pre className="font-mono text-xs leading-none">{`│\n◄\n│`}</pre>
        </div>
      </div>

      {/* Hero Content - Main Layout */}
      <div className="container relative z-10 mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            {/* ... existing text content (Trust badge, Heading, Subtitle, Button) ... */}
            <div className="space-y-4 md:space-y-8">
              {/* Trust Badge */}
              <div className="flex flex-col items-center md:items-start space-y-2">
                {" "}
                <div className="flex items-center gap-2 text-black/80">
                  {" "}
                  <span className="text-sm md:text-base">
                    {" "}
                    Trusted by 10+ clients{" "}
                  </span>{" "}
                  <div className="flex gap-1">
                    {" "}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 bg-black/10 relative flex items-center justify-center border border-black/20"
                      >
                        {" "}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-3 h-3 md:w-4 md:h-4 text-black/80 absolute"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          {" "}
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />{" "}
                        </svg>{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
                {" "}
                <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-black mix-blend-overlay opacity-100">
                  {" "}
                  <span className="md:hidden">TRANSFORM</span>{" "}
                  <span className="hidden md:block">TRANSFORMING</span> <br />{" "}
                  DREAM IDEAS <br /> INTO DIGITAL <br /> PIECES{" "}
                </span>{" "}
                <span className="md:hidden">TRANSFORM</span>{" "}
                <span className="hidden md:block">TRANSFORMING</span> <br />{" "}
                DREAM IDEAS <br /> INTO DIGITAL <br /> PIECES{" "}
              </h1>
              {/* Subtitle */}
              <p className="text-sm md:text-base max-w-lg text-black/80">
                {" "}
                We help you bring your ideas to life using video technology,
                graphics design, and web development.{" "}
              </p>
              {/* Button */}
              <div className="mt-8 md:mt-12">
                {" "}
                <Link href="/#connect">
                  {" "}
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-none bg-black text-white border border-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs"
                  >
                    {" "}
                    <pre className="leading-none">{`┌──────────────────┐\n│ APPLY TODAY ►►► │\n└──────────────────┘`}</pre>{" "}
                  </Button>{" "}
                </Link>{" "}
              </div>
            </div>
          </div>

          {/* Right Column: Poster and Video */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end items-start mt-8 md:mt-0">
            {" "}
            {/* Use items-start */}
            {/* Container for both cards */}
            <div className="flex gap-3 sm:gap-4 w-full max-w-md md:max-w-none">
              {" "}
              {/* Adjust gap and max-width */}
              {/* Image Card Container (Left) */}
              <div
                className="relative aspect-square w-1/2 bg-black/80 border border-white/10 overflow-hidden shadow-lg flex-shrink-0" // Added flex-shrink-0
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                onContextMenu={(e) => e.preventDefault()} // Prevent right-click
              >
                {/* Image */}
                {imageProject.imageUrl ? (
                  <Image
                    src={imageProject.imageUrl}
                    alt={imageProject.title || "Portfolio Image"}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw" // Adjusted sizes based on layout
                    className="object-cover select-none"
                    priority={false} // Lower priority than LCP elements usually
                    quality={75} // Default quality
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/40 font-mono text-sm">
                    No Image
                  </div>
                )}

                {/* Image Overlay Info (Integrated & Positioned Bottom) */}
                <div
                  className={cn(
                    "absolute inset-0 pointer-events-none p-3 sm:p-4 flex flex-col", // Adjusted padding
                    "justify-end", // Position overlay at the bottom
                    // Optional dark gradient from bottom:
                    "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  )}
                >
                  <div className="space-y-1 sm:space-y-2">
                    {/* Year (Bottom) */}
                    <div className="font-mono text-[10px] sm:text-sm text-white/80">
                      <span>{imageProject.year}</span>
                    </div>
                    {/* Title */}
                    {imageProject.title && (
                      <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">
                        {imageProject.title}
                      </h3>
                    )}
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {imageProject.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 bg-white/10 text-white/60 font-mono backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* --- End Image Overlay Info --- */}

                {/* System Status Text */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-left pointer-events-none">
                  <pre className="text-white/40 font-mono text-[8px] sm:text-[10px] leading-tight sm:leading-none">
                    {" "}
                    {/* Smaller text */}
                    {`► IMG: ${isImageHovered ? "SCANNING" : "LOADED"}
► RES: 1080x1080
► TYPE: STILL`}
                  </pre>
                </div>
              </div>
              {/* --- End Image Card Container --- */}
              {/* Video Card Container (Right) */}
              <div className="relative aspect-[9/16] w-1/2 bg-black/80 border border-white/10 overflow-hidden shadow-lg flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  {videoProject.videoUrl && videoProject.imageUrl ? (
                    <div className="w-full h-full relative">
                      <video
                        ref={videoRef}
                        src={videoProject.videoUrl}
                        poster={videoProject.imageUrl}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        preload="auto"
                        controls
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        muted
                      />
                    </div>
                  ) : videoProject.imageUrl ? (
                    <Image
                      src={videoProject.imageUrl}
                      alt={videoProject.title || "Project thumbnail"}
                      layout="fill"
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-white/40 font-mono text-sm">
                      Media not available
                    </div>
                  )}
                </div>
                {/* Video Overlay Info (Integrated & Positioned Top) */}
                <div
                  className={cn(
                    "absolute inset-0 pointer-events-none p-3 sm:p-4 flex flex-col", // Adjusted padding
                    "justify-start", // Position overlay at the top
                    "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
                  )}
                >
                  <div className="space-y-1 sm:space-y-2">
                    {/* Tags (Top) */}
                    <div className="flex flex-wrap gap-1">
                      {videoProject.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 bg-white/10 text-white/60 font-mono backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Title */}
                    {videoProject.title && (
                      <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">
                        {videoProject.title}
                      </h3>
                    )}
                    {/* Year */}
                    <div className="font-mono text-[10px] sm:text-sm text-white/80">
                      <span>{videoProject.year}</span>
                    </div>
                  </div>
                </div>
                {/* --- End Video Overlay Info --- */}
              </div>
              {/* --- End Video Card Container --- */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-black/40 text-xs tracking-widest animate-pulse">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black/60 to-transparent" />
      </div>
    </section>
  );
}

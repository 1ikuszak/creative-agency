export interface ProjectType {
  id: string;
  type: "video" | "short" | "image" | "animation";
  title?: string;
  instagramUrl?: string;
  thumbnailUrl?: string;
  thumbnail?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  videoUrl?: string;
  tags?: string[];
  year?: string;
  client: string;
  status: "COMPLETED" | "ACTIVE" | "PENDING";
  duration?: string;
  fps?: number;
  resolution?: string;
}

export interface PortfolioFilter {
  id: string;
  name: string;
}

export interface PortfolioCategory {
  name: string;
  filters: PortfolioFilter[];
}

export interface PortfolioCategories {
  creative_design: PortfolioCategory;
  web_solutions: PortfolioCategory;
  animation_motion: PortfolioCategory;
  video_production: PortfolioCategory;
}

export type CategoryId = keyof PortfolioCategories;
export interface ProjectType {
  id: string;
  type: "video" | "short" | "image" | "animation";
  title?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  videoUrl?: string;
  imageUrl?: string;
  tags?: string[];
  year?: string;
  client: string;
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

export interface ProjectType {
  id: string;
  type: "video" | "short" | "image" | "animation" | "web";
  title?: string;
  videoUrl: string | null;
  imageUrl: string | null;
  tags?: string[];
  year?: string;
  client?: string;
  websiteUrl?: string;
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

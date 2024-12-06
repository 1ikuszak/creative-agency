import { cache } from "react";
import { portfolioProjects, portfolioCategories } from "@/app/data/portfolio";

export const getPortfolioData = cache(async () => {
  return {
    portfolioProjects: portfolioProjects.map((project) => ({
      ...project,
      // Pre-process URLs for better caching
      imageUrl: project.imageUrl ? new URL(project.imageUrl).toString() : null,
      videoUrl: project.videoUrl ? new URL(project.videoUrl).toString() : null,
    })),
    portfolioCategories,
  };
});

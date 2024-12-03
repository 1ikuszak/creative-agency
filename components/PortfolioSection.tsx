"use client";

import { useState } from "react";
import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { portfolioProjects } from "@/app/data/portfolio";
import { PortfolioCard } from "./portfolio/PortfolioCard";
import { portfolioCategories } from "@/app/data/portfolio";
import { CategoryId } from "@/types/portfolio";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const handleCategoryClick = (categoryId: CategoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const filteredProjects = portfolioProjects.filter((project) => {
    if (!activeCategory) return true;

    // Get all filter names for the active category
    const category = portfolioCategories[activeCategory];
    const categoryFilterNames = category.filters.map((filter) => filter.name);

    // Check if the project has any tags that match the category's filters
    return project.tags?.some((tag) => categoryFilterNames.includes(tag));
  });

  return (
    <div className="flex gap-6">
      <PortfolioSidebar
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />

      {/* Portfolio Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

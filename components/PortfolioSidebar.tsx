"use client";

import { portfolioCategories } from "@/app/data/portfolio";
import { CategoryId } from "@/types/portfolio";

interface PortfolioSidebarProps {
  onCategoryClick: (categoryId: CategoryId) => void;
  activeCategory: CategoryId | null;
}

export function PortfolioSidebar({
  onCategoryClick,
  activeCategory,
}: PortfolioSidebarProps) {
  return (
    <aside className="w-64 shrink-0">
      <div className="sticky top-4 space-y-4 bg-white/10 backdrop-blur-sm border border-black/10 p-4">
        {Object.entries(portfolioCategories).map(([categoryId, category]) => (
          <div key={categoryId} className="space-y-2">
            {/* Cyberpunk-style separator */}
            <div className="flex items-center gap-2 py-2">
              <div className="font-mono text-[10px] text-black/30">
                {`SYS://${categoryId}`}
              </div>
              <div className="flex-1 h-[1px] bg-black/10" />
            </div>

            {/* Clickable Category Header */}
            <button
              onClick={() => onCategoryClick(categoryId as CategoryId)}
              className={`w-full text-left font-semibold transition-colors duration-200 ${
                activeCategory === categoryId
                  ? "text-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {category.name}
            </button>

            {/* Category Filters */}
            <div className="space-y-1">
              {category.filters.map((filter) => (
                <div
                  key={filter.id}
                  className="px-2 py-1 text-sm text-black/60"
                >
                  {filter.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

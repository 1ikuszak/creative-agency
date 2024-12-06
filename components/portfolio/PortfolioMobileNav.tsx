import { portfolioCategories } from "@/app/data/portfolio";
import { CategoryId } from "@/types/portfolio";

interface PortfolioMobileNavProps {
  onCategoryClick: (categoryId: CategoryId) => void;
  activeCategory: CategoryId | null;
  isVisible: boolean;
}

export function PortfolioMobileNav({
  onCategoryClick,
  activeCategory,
  isVisible,
}: PortfolioMobileNavProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-20 transition-opacity duration-300 md:hidden
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="relative">
        {/* Glowing top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-black/5 via-black/20 to-black/5" />

        {/* Main navigation container */}
        <div className="bg-white border-t border-black border-dashed px-4 py-3">
          {/* Cyberpunk-style grid overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" />

          <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar">
            {Object.entries(portfolioCategories).map(
              ([categoryId, category]) => (
                <button
                  key={categoryId}
                  onClick={() => onCategoryClick(categoryId as CategoryId)}
                  className={`
                  relative flex-shrink-0 px-4 py-2 
                  font-mono text-xs uppercase tracking-wider
                  ${
                    activeCategory === categoryId
                      ? `
                        text-white bg-black 
                        shadow-[0_0_10px_rgba(0,0,0,0.1)]
                        before:scale-x-110 before:scale-y-105
                        after:scale-x-105 after:scale-y-110
                        `
                      : `
                        text-black/60 hover:text-black
                        hover:bg-black/5
                        before:hover:scale-x-110 before:hover:scale-y-105
                        after:hover:scale-x-105 after:hover:scale-y-110
                      `
                  }
                `}
                >
                  {/* Glitch effect on hover */}
                  <span className="relative z-10 hover:after:content-[attr(data-text)] hover:after:absolute hover:after:-inset-0.5 hover:after:bg-black/5 hover:after:opacity-0 hover:after:animate-glitch">
                    {category.name}
                  </span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

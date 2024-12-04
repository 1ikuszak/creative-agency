"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioProjects } from "@/app/data/portfolio";
import { PortfolioCard } from "./portfolio/PortfolioCard";
import { portfolioCategories } from "@/app/data/portfolio";
import { CategoryId } from "@/types/portfolio";
import { PortfolioSidebar } from "./PortfolioSidebar";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle scroll events to update active category and sidebar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);

        if (isInView) {
          // Get all category sections
          const sections = sectionRef.current.querySelectorAll(
            "[data-category-section]"
          );

          // Find the current section in view
          sections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();
            const offset = 200;

            if (sectionRect.top <= offset && sectionRect.bottom >= offset) {
              const categoryId = section.getAttribute(
                "data-category"
              ) as CategoryId;
              setActiveCategory(categoryId);
            }
          });
        } else {
          setActiveCategory(null);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group projects by category
  const projectsByCategory = Object.entries(portfolioCategories).reduce(
    (acc, [categoryId, category]) => {
      const categoryProjects = portfolioProjects.filter((project) =>
        project.tags?.some((tag) =>
          category.filters.some((filter) => filter.name === tag)
        )
      );

      acc[categoryId as CategoryId] = categoryProjects;
      return acc;
    },
    {} as Record<CategoryId, typeof portfolioProjects>
  );

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen px-3 md:px-5 lg:px-7"
    >
      {/* Bottom Navigation Bar - Only visible on mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-20 transition-opacity duration-300 md:hidden
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white/80 backdrop-blur-lg border-t border-black/10 px-4 py-3">
          <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar">
            {Object.entries(portfolioCategories).map(
              ([categoryId, category]) => (
                <button
                  key={categoryId}
                  onClick={() => {
                    document.getElementById(categoryId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 font-mono text-xs
                  ${
                    activeCategory === categoryId
                      ? "text-white bg-black shadow-lg"
                      : "text-black/60 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {category.name}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex container mx-auto">
        <PortfolioSidebar
          onCategoryClick={(categoryId) => {
            document.getElementById(categoryId)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          activeCategory={activeCategory}
        />

        <div className="flex-1 pl-8">
          {Object.entries(projectsByCategory).map(
            ([categoryId, projects], index) => (
              <div key={categoryId}>
                {/* ASCII Section Separator */}
                <div
                  className={`hidden md:block ${
                    index === 0 ? "pb-12 md:pb-16" : "py-12 md:py-16"
                  }`}
                >
                  <div className="space-y-2 text-black/20 font-mono text-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 border border-black/20" />
                      <div className="flex-1 h-[1px] bg-black/10" />
                      <pre>{`SYS://${categoryId}`}</pre>
                      <div className="flex-1 h-[1px] bg-black/10" />
                      <div className="w-2 h-2 border border-black/20" />
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <section
                  id={categoryId}
                  data-category={categoryId}
                  data-category-section
                  className="py-12"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {projects.map((project) => (
                      <PortfolioCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden container mx-auto">
        <div className="pb-20">
          {Object.entries(projectsByCategory).map(
            ([categoryId, projects], index) => (
              <div key={categoryId}>
                {/* ASCII Section Separator */}
                <div className={`pb-12 ${index !== 0 ? "py-12" : ""}`}>
                  <div className="space-y-2 text-black/20 font-mono text-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 border border-black/20" />
                      <div className="flex-1 h-[1px] bg-black/10" />
                      <pre>{`SYS://${categoryId}`}</pre>
                      <div className="flex-1 h-[1px] bg-black/10" />
                      <div className="w-2 h-2 border border-black/20" />
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <section
                  id={categoryId}
                  data-category={categoryId}
                  data-category-section
                  className="py-12"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {projects.map((project) => (
                      <PortfolioCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

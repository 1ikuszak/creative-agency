"use client";

import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { portfolioProjects } from "@/app/data/portfolio";
import { portfolioCategories } from "@/app/data/portfolio";
import { CategoryId } from "@/types/portfolio";
import { PortfolioSidebar } from "./PortfolioSidebar";
import { PortfolioMobileNav } from "./portfolio/PortfolioMobileNav";

// Lazy load the PortfolioCard component
const PortfolioCard = lazy(() =>
  import("./portfolio/PortfolioCard").then((module) => ({
    default: module.PortfolioCard,
  }))
);

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // For mobile navigation - scroll to tags
  const onMobileNavClick = (categoryId: CategoryId) => {
    const firstFilter = portfolioCategories[categoryId].filters[0];
    const tagId = `tag-${firstFilter.id}`;

    const element = document.getElementById(tagId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // For sidebar - scroll to category sections
  const onSidebarClick = (categoryId: CategoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
          let foundActive = false;
          sections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();
            const offset = 200;

            if (
              !foundActive &&
              sectionRect.top <= offset &&
              sectionRect.bottom >= offset
            ) {
              const categoryId = section.getAttribute(
                "data-category"
              ) as CategoryId;
              setActiveCategory(categoryId);
              foundActive = true;
            }
          });

          if (!foundActive) {
            setActiveCategory(null);
          }
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
    <div ref={sectionRef} className="relative min-h-screen  w-full">
      {/* Mobile Navigation */}
      <PortfolioMobileNav
        onCategoryClick={onMobileNavClick}
        activeCategory={activeCategory}
        isVisible={isVisible}
      />

      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex">
        <PortfolioSidebar
          onCategoryClick={onSidebarClick}
          activeCategory={activeCategory}
        />

        <div className="flex-1 pl-8">
          {Object.entries(projectsByCategory).map(
            ([categoryId, projects], index) => (
              <div key={categoryId}>
                {/* ASCII Section Separator */}
                <div
                  className={`hidden md:block ${
                    index === 0 ? "pb-0 md:pb-0" : "py-8 md:py-12"
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                      {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                      ))}
                    </div>
                  </Suspense>
                </section>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden ">
        <div className="pb-20">
          {Object.entries(projectsByCategory).map(
            ([categoryId, projects], index) => (
              <div key={categoryId}>
                {/* ASCII Section Separator */}
                <div className={`pb-6 ${index !== 0 ? "py-6 " : ""}`}>
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid grid-cols-1 gap-4">
                      {projects.map((project) => {
                        // Generate ID from the first filter of the project's first tag
                        const firstTag = project.tags?.[0];
                        const tagId = firstTag
                          ? `tag-${firstTag
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")}`
                          : "";

                        return (
                          <div key={project.id} id={tagId}>
                            <PortfolioCard project={project} />
                          </div>
                        );
                      })}
                    </div>
                  </Suspense>
                </section>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { CategoryId } from "@/types/portfolio";
import { PortfolioSidebar } from "./PortfolioSidebar";
import { PortfolioErrorBoundary } from "./PortfolioErrorBoundary";
import { PortfolioClientWrapper } from "./PortfolioClientWrapper";

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const onSidebarClick = (categoryId: CategoryId) => {
    const element = document.getElementById(`category-${categoryId}`);
    console.log("Desktop clicking category:", categoryId);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isInView) {
          const sections = sectionRef.current.querySelectorAll(
            "[data-category-section]"
          );

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

  return (
    <PortfolioErrorBoundary>
      <div ref={sectionRef} className="relative min-h-screen w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex">
          <PortfolioSidebar
            onCategoryClick={onSidebarClick}
            activeCategory={activeCategory}
          />
          <div className="flex-1 pl-8">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-black/5 animate-pulse"
                    />
                  ))}
                </div>
              }
            >
              <PortfolioClientWrapper />
            </Suspense>
          </div>
        </div>

        {/* Mobile Layout - Simple stack */}
        <div className="md:hidden">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video bg-black/5 animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <PortfolioClientWrapper />
          </Suspense>
        </div>
      </div>
    </PortfolioErrorBoundary>
  );
}

"use client";

import {
  CategoryId,
  ProjectType,
  PortfolioCategories,
} from "@/types/portfolio";
import { PortfolioCardWrapper } from "./PortfolioCardWrapper";

interface PortfolioClientContentProps {
  initialData: {
    portfolioProjects: ProjectType[];
    portfolioCategories: PortfolioCategories;
  };
}

export function PortfolioClientContent({
  initialData,
}: PortfolioClientContentProps) {
  const { portfolioProjects, portfolioCategories } = initialData;

  const projectsByCategory = Object.entries(portfolioCategories).reduce(
    (acc, [categoryId, category]) => {
      const categoryProjects = portfolioProjects.filter((project) =>
        project.tags?.some((tag) =>
          category.filters.some(
            (filter: { name: string }) => filter.name === tag
          )
        )
      );

      acc[categoryId as CategoryId] = categoryProjects;
      return acc;
    },
    {} as Record<CategoryId, ProjectType[]>
  );

  return (
    <>
      {Object.entries(projectsByCategory).map(
        ([categoryId, projects], index) => (
          <div key={categoryId}>
            <div
              className={`hidden md:block ${
                index === 0 ? "pb-0" : "py-8 md:py-12"
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

            <section
              id={categoryId}
              data-category={categoryId}
              data-category-section
              className="py-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {projects.map((project) => (
                  <PortfolioCardWrapper key={project.id} project={project} />
                ))}
              </div>
            </section>
          </div>
        )
      )}
    </>
  );
}

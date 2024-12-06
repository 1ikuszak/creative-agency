import { CategoryId, ProjectType } from "@/types/portfolio";
import { PortfolioCardWrapper } from "./PortfolioCardWrapper";

interface PortfolioContentProps {
  portfolioData: {
    portfolioProjects: Array<ProjectType>;
    portfolioCategories: Record<
      string,
      {
        filters: Array<{
          name: string;
          id: string;
        }>;
      }
    >;
  };
}

export function PortfolioContent({ portfolioData }: PortfolioContentProps) {
  const { portfolioProjects, portfolioCategories } = portfolioData;

  const projectsByCategory = Object.entries(portfolioCategories).reduce(
    (acc, [categoryId, category]) => {
      const categoryProjects = portfolioProjects
        .filter((project) =>
          project.tags?.some((tag: string) =>
            category.filters.some((filter) => filter.name === tag)
          )
        )
        .map((project) => ({
          ...project,
          videoUrl: project.videoUrl || undefined,
          imageUrl: project.imageUrl || undefined,
        }));

      acc[categoryId as CategoryId] = categoryProjects as ProjectType[];
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
              id={`category-${categoryId}`}
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

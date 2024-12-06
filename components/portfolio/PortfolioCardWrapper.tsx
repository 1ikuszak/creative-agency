import dynamic from "next/dynamic";
import { ProjectType } from "@/types/portfolio";

const PortfolioCard = dynamic(() => import("./PortfolioCard"), {
  ssr: false,
  loading: () => <div className="aspect-video bg-black/5 animate-pulse" />,
});

export function PortfolioCardWrapper({ project }: { project: ProjectType }) {
  return <PortfolioCard project={project} />;
}

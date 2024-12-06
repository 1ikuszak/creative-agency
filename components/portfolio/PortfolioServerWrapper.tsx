import { Suspense } from "react";
import { getPortfolioData } from "@/lib/portfolio";
import { PortfolioClientContent } from "./PortfolioClientContent";

export default async function PortfolioServerWrapper() {
  const data = await getPortfolioData();

  return (
    <Suspense
      fallback={<div className="aspect-video bg-black/5 animate-pulse" />}
    >
      <PortfolioClientContent initialData={data} />
    </Suspense>
  );
}

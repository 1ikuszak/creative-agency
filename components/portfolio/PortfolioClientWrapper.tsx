"use client";

import { useEffect, useState } from "react";
import { PortfolioContent } from "./PortfolioContent";
import { ProjectType, PortfolioCategories } from "@/types/portfolio";

interface PortfolioData {
  portfolioProjects: ProjectType[];
  portfolioCategories: PortfolioCategories;
}

export function PortfolioClientWrapper() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/portfolio")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message));
    };

    fetchData();
  }, []);

  if (error) return <div>Error loading portfolio: {error}</div>;
  if (!data) return <div className="aspect-video bg-black/5 animate-pulse" />;

  // @ts-expect-error - PortfolioContent expects initialData prop but data has the same shape
  return <PortfolioContent portfolioData={data} />;
}

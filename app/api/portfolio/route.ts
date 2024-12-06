import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/portfolio";

// These are Next.js 15 specific configurations
export const dynamic = "force-dynamic"; // Ensures the route is not cached
export const revalidate = 0; // Disables static generation for this route

export async function GET() {
  try {
    const data = await getPortfolioData();

    // Set proper cache headers
    const headers = {
      "Cache-Control": "no-store",
      "Content-Type": "application/json",
    };

    return NextResponse.json(data, { headers });
  } catch (error) {
    console.error("Portfolio API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio data" },
      { status: 500 }
    );
  }
}

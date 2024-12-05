"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig, navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {navigationLinks.mainNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href.replace("/#", "/"))
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig, navigationLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-full">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Image
          src="/drewmp.svg"
          alt="Drew Logo"
          width={48}
          height={48}
          priority
        />
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

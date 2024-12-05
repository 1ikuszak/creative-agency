import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 mx-auto items-center px-3 md:px-5 lg:px-7">
        <MainNav />
        <MobileNav />
        <Link className="ml-auto" href="/#connect">
          <Button className="rounded-none" size="sm">
            Get My Free Call
          </Button>
        </Link>
      </div>
    </header>
  );
}

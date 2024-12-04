import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 mx-auto items-center px-3 md:px-5 lg:px-7">
        <MainNav />
        <MobileNav />
        <Button size={"sm"} className="ml-auto rounded-none">
          Get My Free Call
        </Button>
      </div>
    </header>
  );
}

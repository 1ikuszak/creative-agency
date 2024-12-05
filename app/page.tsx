import { Button } from "@/components/ui/button";
import HDREnvironment from "@/components/HDREnvironment";
import { ServiceCard } from "@/components/ServiceCard";
import Image from "next/image";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CalendlyWidget from "@/components/CalendlyWidget";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  const imageProps = {
    loading: "eager" as const,
    priority: true,
    sizes: "(max-width: 768px) 96px, 128px",
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center px-3 md:px-5 lg:px-7"
      >
        <HDREnvironment />

        {/* Layered ASCII Background Effects */}
        <div className="absolute inset-0 overflow-hidden md:pointer-events-none">
          {/* Top Left Corner */}
          <div className="absolute top-8 left-8 text-white">
            <pre className="font-mono text-xs leading-none">
              {`╔═══╗  *  ˚
║███║ *✧⋆
╚═══╝  ⋆ ˚
            `}
            </pre>
          </div>

          {/* Bottom Left Corner */}
          <div className="absolute bottom-8 left-8 text-white">
            <pre className="font-mono text-xs leading-none">
              {`▀▒░ ◢◤ ░▒▓
◢██████◤ 
▀▀▀◥◤▀▀▀ 
            `}
            </pre>
          </div>

          {/* Center Left Side */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
            <pre className="font-mono text-xs leading-none">
              {`│
◄
│
            `}
            </pre>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto">
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              TRANSFORMING <br /> DREAM IDEAS
              <br />
              INTO DIGITAL
              <br />
              PIECES
            </h1>

            <p className="text-sm md:text-base max-w-3xl text-white">
              We help you bring your ideas to life using video technology,
              graphics design, and web development.
            </p>

            <div className="mt-8 md:mt-12">
              <Link href="/#connect">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-none bg-black text-white border border-white 
                  hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs"
                >
                  <pre className="leading-none">
                    {`┌──────────────────┐
│ APPLY TODAY ►►► │
└──────────────────┘`}
                  </pre>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-white/20 text-xs tracking-widest animate-pulse">
            SCROLL
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:px-7"
      >
        {/* New Background Layers */}
        <div className="overflow-hidden absolute inset-0">
          <div
            className="h-full rounded-b-none relative bg-black"
            style={{
              backgroundColor: "#000000",
              backgroundImage: `url('/leather.png')`,
              backgroundRepeat: "repeat",
              imageRendering: "crisp-edges",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              opacity: 1,
            }}
          >
            {/* Darkening overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            {/* Additional darkness layer */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/50 to-black/50"
              style={{
                mixBlendMode: "color-burn",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto container space-y-8 md:space-y-12 lg:space-y-16">
          {/* Services Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-white mix-blend-overlay opacity-80">
                SERVICES
              </span>
              SERVICES
            </h1>
            <div className="font-mono text-xs text-white/30">
              {`[ ID: SRV-${new Date().getFullYear()}-001 ]`}
            </div>
            <div className="flex justify-center gap-4 md:gap-8 text-white/40 font-mono text-xs">
              <div>{`<design/>`}</div>
              <div>{`<strategy/>`}</div>
              <div>{`<creativity/>`}</div>
            </div>
          </div>

          {/* Circuit Board Pattern Top */}
          <div className="hidden md:flex justify-center text-white/20 font-mono text-xs whitespace-pre">
            {`┌─────────────────────────────────────────┐
├╶╮ ┌─┐ ┌╴                       ─┐ ┌─┐ ╭╴┤
│╶┘ └╴│ │  INITIALIZING SERVICES   │┘ └╴│
├── ○╴└─┘    SYSTEM LOADING...    └─┘╶○ ──┤
│  ╭────╴ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ ╶─────┐   │
└──┘     SERVICES LIST ACTIVATED      └───┘`}
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <ServiceCard
              number="01"
              title="Creative Design"
              variant="purple"
              services={[
                "2D Graphics",
                "3D Graphics",
                "Logo Design",
                "Branding",
              ]}
            />
            <ServiceCard
              number="02"
              title="Web Solutions"
              variant="blue"
              services={["Web Design", "Web Development"]}
            />
            <ServiceCard
              number="03"
              title="Animation & Motion"
              variant="emerald"
              services={["2D Animation", "3D Animation"]}
            />
            <ServiceCard
              number="04"
              title="Video Production"
              variant="rose"
              services={[
                "Video Editing",
                "Short-Form Videos",
                "Long-Form Videos",
                "Thumbnail Creation",
              ]}
            />
          </div>

          {/* Status and Data Stream */}
          <div className="space-y-4">
            <div className="flex justify-between text-white/10 font-mono text-xs">
              <div>{`◄══ IN:0001`}</div>
              <div>{`OUT:0001 ══►`}</div>
            </div>

            {/* Displayed only on small devices */}
            <div className="block md:hidden text-center text-white/20 font-mono text-[10px] leading-none mt-8">
              {`
║ 010110 EXECUTING PROTOCOL CONNECT ║`}
            </div>

            {/* Displayed only on larger devices */}
            <div className="hidden md:block text-center text-white/20 font-mono text-[10px] leading-none mt-8">
              {`010110 EXECUTING PROTOCOL 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://ready.to.connect ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        id="founders"
        className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-3 md:px-5 lg:px-7"
      >
        <div className="overflow-hidden absolute inset-0 w-full">
          <div
            className="h-full w-full relative"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `url('/leather.png')`,
              backgroundRepeat: "repeat",
              imageRendering: "crisp-edges",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              opacity: 0.95,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto container space-y-8 md:space-y-12 lg:space-y-16">
          {/* Founders Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-black tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-red-950 mix-blend-overlay opacity-100">
                FOUNDERS
              </span>
              FOUNDERS
            </h1>

            {/* Updated Cyberpunk Style Header Elements */}
            <div className="flex flex-col items-center gap-2">
              <pre className="text-black/60 font-mono text-[10px] md:text-xs leading-none overflow-x-auto max-w-full">
                {`▀▒░◢◤░▒▓█ SYSTEM BREACH DETECTED █▓▒░◥◣░▒`}
              </pre>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-black/60 font-mono text-[10px] md:text-xs px-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-emerald-500 animate-pulse" />
                  CORE.ACTIVE
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-amber-500 animate-pulse" />
                  SYNC.READY
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-rose-500 animate-pulse" />
                  SCAN.COMPLETE
                </div>
              </div>

              <pre className="text-black/40 font-mono text-[10px] md:text-xs leading-none mt-2 overflow-x-auto max-w-full px-2">
                {`╔═════════════════════════════════════╗
║ ACCESSING CLASSIFIED INFORMATION... ║
╚══════════════════════════════════════╝`}
              </pre>
            </div>
          </div>

          {/* Character Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Character 1 - Antek */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black/5 blur-xl group-hover:bg-black/10 transition-all duration-300" />
              <div className="relative border border-black/20 p-4 md:p-8 bg-white/50 backdrop-blur-sm">
                {/* Location Tag */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 font-mono text-[10px] md:text-xs text-black/60">
                  LOC: POLAND
                </div>

                {/* Profile Image */}
                <div className="relative w-24 md:w-32 aspect-square mb-4 md:mb-6">
                  <Image
                    src="/antek.jpg"
                    alt="Antek Profile"
                    fill
                    {...imageProps}
                    className="object-cover"
                  />
                </div>

                {/* Character Stats */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      ANTEK
                    </h3>
                    <div className="font-mono text-[10px] md:text-xs text-black/60">
                      {`[ ID: SYS-${new Date().getFullYear()}-001 ]`}
                    </div>
                  </div>

                  {/* Class & Role */}
                  <div className="font-mono text-xs md:text-sm text-black/80">
                    CREATIVE MASTERMIND
                  </div>

                  {/* ASCII Stats Bars */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>DESIGN</span>
                        <span>95/100</span>
                      </div>
                      <pre className="text-emerald-500/60 text-xs leading-none">
                        {`[█████████▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>PROBLEM SOLVING</span>
                        <span>90/100</span>
                      </div>
                      <pre className="text-blue-500/60 text-xs leading-none">
                        {`[████████▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>CREATIVITY</span>
                        <span>85/100</span>
                      </div>
                      <pre className="text-purple-500/60 text-xs leading-none">
                        {`[███████▒▒▒] `}
                      </pre>
                    </div>
                  </div>

                  {/* Special Abilities */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs text-black/60">
                      SPECIAL ABILITIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Branding",
                        "Illustration",
                        "3d Modeling",
                        "Graphic Design",
                      ].map((ability) => (
                        <span
                          key={ability}
                          className="text-xs px-3 py-1 bg-black/10 text-black/80 border border-black/20"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Character Quote */}
                  <div className="pt-4 border-t border-black/20">
                    <div className="font-mono text-xs text-black/60">
                      SIGNATURE MOVE
                    </div>
                    <p className="text-black/80 italic mt-2">
                      &ldquo;Design is not just what it looks like, it&apos;s
                      how it works&rdquo;
                    </p>
                  </div>

                  {/* System Status */}
                  <pre className="text-black/40 text-[10px] leading-none mt-4">
                    {`SYS://status
► CPU: OPTIMAL
► MEMORY: 98% ALLOCATED
► COFFEE_LEVELS: CRITICALLY_HIGH`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Character 2 - Lukasz */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black/5 blur-xl group-hover:bg-black/10 transition-all duration-300" />
              <div className="relative border border-black/20 p-4 md:p-8 bg-white/50 backdrop-blur-sm">
                {/* Location Tag */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 font-mono text-[10px] md:text-xs text-black/60">
                  LOC: JAPAN
                </div>

                {/* Profile Image */}
                <div className="relative w-24 md:w-32 aspect-square mb-4 md:mb-6">
                  <Image
                    src="/luki.jpg"
                    alt="Lukasz Profile"
                    fill
                    className="object-cover"
                    {...imageProps}
                  />
                </div>

                {/* Character Stats */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      LUKASZ
                    </h3>
                    <div className="font-mono text-[10px] md:text-xs text-black/60">
                      {`[ ID: SYS-${new Date().getFullYear()}-002 ]`}
                    </div>
                  </div>

                  {/* Class & Role */}
                  <div className="font-mono text-xs md:text-sm text-black/80">
                    TECHNICAL ARCHITECT
                  </div>

                  {/* ASCII Stats Bars */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>VIDEO</span>
                        <span>95/100</span>
                      </div>
                      <pre className="text-rose-500/60 text-xs leading-none">
                        {`[█████████▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>CODING</span>
                        <span>92/100</span>
                      </div>
                      <pre className="text-amber-500/60 text-xs leading-none">
                        {`[████████▒▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>INNOVATION</span>
                        <span>88/100</span>
                      </div>
                      <pre className="text-cyan-500/60 text-xs leading-none">
                        {`[███████▒▒▒] `}
                      </pre>
                    </div>
                  </div>

                  {/* Special Abilities */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs text-black/60">
                      SPECIAL ABILITIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Visual Design",
                        "UX Strategy",
                        "Coding",
                        "Video Editing",
                      ].map((ability) => (
                        <span
                          key={ability}
                          className="text-xs px-3 py-1 bg-black/10 text-black/80 border border-black/20"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Character Quote */}
                  <div className="pt-4 border-t border-black/20">
                    <div className="font-mono text-xs text-black/60">
                      SIGNATURE MOVE
                    </div>
                    <p className="text-black/80 italic mt-2">
                      &ldquo;I love building and creating things&rdquo;
                    </p>
                  </div>

                  {/* System Status */}
                  <pre className="text-black/40 text-[10px] leading-none mt-4">
                    {`SYS://status
► CREATIVITY: OVERCLOCKED
► INSPIRATION: PEAK
► DESIGN_POWER: MAXIMUM`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* System Breach Divider */}
          <div className="flex items-center gap-2 md:gap-4 mt-8 md:mt-16">
            <div className="flex-1 h-[1px] bg-black/10" />
            <div className="font-mono text-[10px] md:text-xs text-black/30">
              SYSTEM BREACH
            </div>
            <div className="flex-1 h-[1px] bg-black/10" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-3 md:px-5 lg:px-7"
      >
        <div className="overflow-hidden absolute inset-0">
          <div
            className="h-full w-full relative"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `url('/leather.png')`,
              backgroundRepeat: "repeat",
              imageRendering: "crisp-edges",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              opacity: 0.95,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto container space-y-8 md:space-y-12 lg:space-y-16">
          {/* Portfolio Header */}
          <div className="text-center space-y-4">
            <h1 className="text-7xl md:text-8xl font-semibold text-black tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-red-950 mix-blend-overlay opacity-100">
                PORTFOLIO
              </span>
              PORTFOLIO
            </h1>
            <div className="font-mono text-xs text-black/30">
              {`[ ID: PRT-${new Date().getFullYear()}-001 ]`}
            </div>
            <div className="flex justify-center gap-8 text-black/40 font-mono text-xs">
              <div>{`<showcase/>`}</div>
              <div>{`<projects/>`}</div>
              <div>{`<works/>`}</div>
            </div>
          </div>

          {/* Circuit Board Pattern Top */}
          {/* <div className="flex justify-center text-black/20 font-mono text-xs whitespace-pre">
            {`┌─────────────────────────────────────────┐
├╶╮ ┌─┐ ┌╴                        ─┐ ┌─┐ ╭╴┤
│╶┘ └╴│ │  LOADING PORTFOLIO...  │ │┘ └╴│
├── ○╴└─┘    PLEASE STANDBY      └─┘╶○ ──┤
│  ╭────╴ ▪▪▪▪▪▪▪▪▪▪▪���▪▪▪▪▪▪▪▪▪ ╶────┐   │
└────┘     SHOWCASE INITIALIZED        └───┘`}
          </div> */}

          {/* Replace the old portfolio grid with the new component */}
          <PortfolioSection />

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-none mt-12 bg-black text-white border border-white 
                hover:bg-red-950  transition-all duration-300 font-mono text-xs"
            >
              <pre className="leading-none">
                {`┌─────────────────────────────┐
│  CREATE YOUR PROJECT ►►►  │
└─────────────────────────────┘`}
              </pre>
            </Button>
          </div>

          {/* Replace the old status and data stream with these new components */}
          {/* Displayed only on small devices */}
          <div className="block md:hidden text-center text-black/20 font-mono text-[10px] leading-none">
            {`
║ 010110 EXECUTING PROTOCOL PORTFOLIO ║`}
          </div>

          {/* Displayed only on larger devices */}
          <div className="hidden md:block text-center text-black/20 font-mono text-[10px] leading-none">
            {`010110 EXECUTING PROTOCOL 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://portfolio.showcase ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section
        id="connect"
        className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-3 md:px-5 lg:px-7"
      >
        {/* Background - updated to royal blue */}
        <div className="overflow-hidden absolute inset-0">
          <div
            className="h-full rounded-b-none relative bg-[#1a237e]" // Changed to royal blue
            style={{
              backgroundImage: `url('/leather.png')`,
              backgroundRepeat: "repeat",
              imageRendering: "crisp-edges",
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              opacity: 1,
            }}
          >
            <div
              className="absolute inset-0 bg-[#0d47a1]/80" // Darker royal blue overlay
              style={{ mixBlendMode: "multiply" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#1a237e]/50 via-[#0d47a1]/50 to-[#1a237e]/50" // Royal blue gradient
              style={{ mixBlendMode: "color-burn" }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto container space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header - Updated spacing and font sizes */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-black tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-blue-800 mix-blend-overlay opacity-100">
                CONNECT
              </span>
              CONNECT
            </h1>

            <div className="flex flex-col items-center gap-2">
              {/* Hide on mobile, show on larger screens */}
              <pre className="hidden md:block text-white/40 font-mono text-[10px] md:text-xs leading-none">
                {`╭──── NEURAL LINK ESTABLISHED ────╮
│    QUANTUM HANDSHAKE ACTIVE    │
╰─────────────────────────────────╯`}
              </pre>

              {/* Simplified version for mobile */}
              <pre className="md:hidden text-white/40 font-mono text-[10px] leading-none">
                {`╭── LINK ACTIVE ──╮
│  READY TO SYNC  │
╰─────────────────╯`}
              </pre>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-white/60 font-mono text-[10px] md:text-xs px-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 bg-emerald-500/60 animate-ping" />
                  <span className="inline-block w-2 h-2 bg-emerald-500/60" />
                  QUANTUM.SYNC
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1 h-1 bg-purple-500/60 animate-ping" />
                  <span className="inline-block w-2 h-2 bg-purple-500/60" />
                  NEURAL.LINK
                </div>
              </div>

              {/* Hide on mobile, show on larger screens */}
              <pre className="hidden md:block text-white/20 font-mono text-[10px] leading-none">
                {`◢██████��█████████████████████████◣
◢ SECURE CHANNEL ESTABLISHED ◣
◥██████████████████████████████████◤`}
              </pre>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Calendly Column */}
            <div className="space-y-4 md:space-y-6 h-full">
              <div className="font-mono text-[10px] md:text-xs text-white/40 text-center">
                {`[ SCHEDULING_MATRIX_v${new Date().getFullYear()}.1 ]`}
              </div>

              <div className="relative flex-1">
                <div className="w-full h-full">
                  <CalendlyWidget />
                </div>
              </div>
            </div>

            {/* Testimonial Column */}
            <div className="space-y-4 md:space-y-6">
              <div className="font-mono text-[10px] md:text-xs text-white/40 text-center">
                {`[ CLIENT_FEEDBACK_STREAM ]`}
              </div>

              <div className="relative h-full">
                <div className="relative border border-white/20 p-4 md:p-6 lg:p-8 backdrop-blur-sm">
                  {/* Testimonial Carousel/Tabs */}
                  <div className="space-y-8">
                    {/* First Testimonial */}
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        &ldquo;Working with drewmp was an absolute pleasure.
                        professional website that perfectly captures our brand.
                        The end result is a site that looks amazing, works
                        flawlessly, and has already received great
                        feedback.&rdquo;
                      </p>

                      <div className="flex items-center gap-3 md:gap-4">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 border border-white/20">
                          <AvatarImage
                            src="https://drewmp.s3.eu-north-1.amazonaws.com/kirutika.jpg"
                            alt="Kirutika"
                            className="object-cover"
                            loading="eager"
                          />
                          <AvatarFallback className="bg-white/10 text-white/60 font-mono text-[10px] md:text-xs">
                            K
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-semibold text-sm md:text-base">
                            Kirutika
                          </div>
                          <div className="text-white/60 font-mono text-[10px] md:text-sm">
                            CEO of Ambrosial Automations
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Testimonial */}
                    <div className="space-y-4 md:space-y-6 border-t border-white/10 pt-8">
                      <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        &ldquo;Luke demonstrated a remarkable understanding of
                        our vision, with extremely clear communication and
                        responsiveness that allowed us to rest easy knowing we
                        were in good hands. Thanks to drewmp our website
                        accurately reflects the service we provide to our
                        clients.&rdquo;
                      </p>

                      <div className="flex items-center gap-3 md:gap-4">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 border border-white/20">
                          <AvatarImage
                            src="https://drewmp.s3.eu-north-1.amazonaws.com/jacek_goszczynski.jpeg"
                            alt="Jacek Goszczyński"
                            className="object-cover"
                            loading="eager"
                          />
                          <AvatarFallback className="bg-white/10 text-white/60 font-mono text-[10px] md:text-xs">
                            JG
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-semibold text-sm md:text-base">
                            Jacek Goszczyński
                          </div>
                          <div className="text-white/60 font-mono text-[10px] md:text-sm">
                            CEO JG-Marine
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-500/60 font-mono text-[10px] md:text-xs">
                      <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500/60 rounded-full animate-pulse" />
                      VERIFIED TESTIMONIALS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="space-y-4">
            {/* Mobile status */}
            <div className="block md:hidden text-center text-white/20 font-mono text-[10px] leading-none">
              {`
║ 010110 EXECUTING PROTOCOL CONNECT ║`}
            </div>

            {/* Desktop status */}
            <div className="hidden md:block text-center text-white/20 font-mono text-[10px] leading-none">
              {`010110 EXECUTING PROTOCOL 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://ready.to.connect ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

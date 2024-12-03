import { Button } from "@/components/ui/button";
import HDREnvironment from "@/components/HDREnvironment";
import { ServiceCard } from "@/components/ServiceCard";
import Image from "next/image";
import { PortfolioSection } from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4">
        <HDREnvironment />

        {/* Layered ASCII Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <div className="container relative z-10 mx-auto pointer-events-none">
          <div className="">
            {/* Headline - removed mix-blend-multiply, added text shadow for better visibility */}
            <h1 className="text-7xl md:text-8xl font-bold text-white">
              TRANSFORMING <br /> DREAM IDEAS
              <br />
              INTO DIGITAL
              <br />
              PIECES
            </h1>

            <p className="mt-8 text-base max-w-3xl text-white">
              We help you bring your ideas to life using video technology,
              graphics design, and web development.
            </p>

            <div className="pointer-events-auto inline-block">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-none mt-12 bg-white/10 backdrop-blur-sm text-white border border-white/20 
                hover:bg-white/20 transition-all duration-300"
              >
                Start Your Project
              </Button>
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

        <div className="absolute right-8 top-0 bottom-0 z-10 w-1 h-screen bg-gradient-to-b from-transparent via-white/80 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.7)] shadow-white/30 mix-blend-screen" />
      </section>

      {/* Services Section */}
      <section className="relative flex flex-col items-center justify-center py-20">
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

        <div className="relative z-10 mx-auto container space-y-16">
          {/* Services Header */}
          <div className="text-center space-y-4">
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-white mix-blend-overlay opacity-80">
                SERVICES
              </span>
              SERVICES
            </h1>
            <div className="font-mono text-xs text-white/30">
              {`[ ID: SRV-${new Date().getFullYear()}-001 ]`}
            </div>
            <div className="flex justify-center gap-8 text-white/40 font-mono text-xs">
              <div>{`<design/>`}</div>
              <div>{`<strategy/>`}</div>
              <div>{`<creativity/>`}</div>
            </div>
          </div>

          {/* Circuit Board Pattern Top */}
          <div className="flex justify-center text-white/20 font-mono text-xs whitespace-pre">
            {`┌─────────────────────────────────────────┐
├╶╮ ┌─┐ ┌╴                       ─┐ ┌─┐ ╭╴┤
│╶┘ └╴│ │  INITIALIZING SERVICES  │ │╶┘ └╴│
├── ○╴└─┘    SYSTEM LOADING...    └─┘╶○ ──┤
│  ╭────╴ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ ╶─────┐   │
└──┘     SERVICES LIST ACTIVATED      └───┘`}
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
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

          {/* <div className="text-center text-white/20 font-mono text-xs whitespace-pre">
            {`┌─┐     SERVICES LIST TERMINATED      ┌─┐
│ ╰────╴▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪╶────╯ │
├── ○╴┌─┐    SYSTEM SHUTDOWN    ┌─┐╶○ ──┤
│╶┐ ┌╴│ │  PROCESS COMPLETED... │ │╶┐ │
├╶┘ └─┘ └╴                      ┘ └─┘ └╴┤
└──────────────────────────────────────────┘`}
          </div> */}

          {/* Status and Data Stream */}
          <div className="space-y-4">
            <div className="flex justify-between text-white/10 font-mono text-xs">
              <div>{`◄══ IN:0001`}</div>
              <div>{`OUT:0001 ══►`}</div>
            </div>

            <div className="text-center text-white/20 font-mono text-[10px] leading-none">
              {`010110 EXECUTING PROTOCOL 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://services.render.complete ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="relative group overflow-hidden rounded-none"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#7f1d1d", // dark red base
                  backgroundImage: `url('/leather.png')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "200px",
                  imageRendering: "crisp-edges",
                  WebkitBackfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  opacity: 0.9,
                }}
              >
                <div
                  className="absolute inset-0 bg-red-950/40"
                  style={{
                    mixBlendMode: "overlay",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-950/30 to-red-900/30"
                  style={{
                    mixBlendMode: "soft-light",
                  }}
                />
              </div>
              <span className="relative z-10 text-white font-semibold">
                Let&apos;s Create Together
              </span>
            </Button>
          </div> */}
        </div>

        <div className="absolute right-8 top-0 bottom-0 z-10 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(0,255,127,0.7)] shadow-blue-500/50 mix-blend-difference" />
      </section>

      {/* Founders Section - Moved up */}
      <section className="relative flex flex-col items-center justify-center py-20">
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

        <div className="relative z-10 mx-auto container space-y-16">
          {/* Founders Header */}
          <div className="text-center space-y-4">
            <h1 className="text-7xl md:text-8xl font-semibold text-black tracking-tighter leading-none relative bg-[url('/leather.png')] bg-repeat bg-clip-text text-transparent [image-rendering:crisp-edges] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] opacity-100">
              <span className="absolute inset-0 bg-[url('/leather.png')] bg-repeat bg-clip-text text-red-950 mix-blend-overlay opacity-100">
                FOUNDERS
              </span>
              FOUNDERS
            </h1>

            {/* Updated Cyberpunk Style Header Elements */}
            <div className="flex flex-col items-center gap-2">
              <pre className="text-black/60 font-mono text-xs leading-none">
                {`▀▒░◢◤░▒▓█ SYSTEM BREACH DETECTED █▓▒░◥◣░▒`}
              </pre>

              <div className="flex items-center gap-4 text-black/60 font-mono text-xs">
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

              <pre className="text-black/40 font-mono text-xs leading-none mt-2">
                {`╔═════════════════════════════════════╗
║ ACCESSING CLASSIFIED INFORMATION... ║
╚═════════════════════════════════════╝`}
              </pre>
            </div>
          </div>

          {/* Character Selection Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Character 1 - Antek */}
            <div className="relative group">
              <div className="absolute inset-0 bg-black/5 blur-xl group-hover:bg-black/10 transition-all duration-300" />
              <div className="relative border border-black/20 p-8 bg-white/50 backdrop-blur-sm">
                {/* Location Tag */}
                <div className="absolute top-4 right-4 font-mono text-xs text-black/60">
                  LOC: POLAND
                </div>

                {/* Replace ASCII Art with Image */}
                <div className="relative w-32 aspect-square mb-6">
                  <Image
                    src="/antek.jpg"
                    alt="Antek Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 128px"
                    priority
                  />
                </div>

                {/* Character Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-black">ANTEK</h3>
                    <div className="font-mono text-xs text-black/60">
                      {`[ ID: SYS-${new Date().getFullYear()}-001 ]`}
                    </div>
                  </div>

                  {/* Class & Role */}
                  <div className="font-mono text-sm text-black/80">
                    CLASS: TECHNICAL ARCHITECT
                  </div>

                  {/* ASCII Stats Bars */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>CODING</span>
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
                        {`[████████▒▒] `}
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
                        "Full-Stack Mastery",
                        "AI Integration",
                        "System Architecture",
                        "Problem Solving",
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
                      &ldquo;Turning coffee into code since 2018&rdquo;
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
              <div className="relative border border-black/20 p-8 bg-white/50 backdrop-blur-sm">
                {/* Location Tag */}
                <div className="absolute top-4 right-4 font-mono text-xs text-black/60">
                  LOC: JAPAN
                </div>

                {/* Replace ASCII Art with Image */}
                <div className="relative w-32 aspect-square mb-6">
                  <Image
                    src="/luki.jpg"
                    alt="Lukasz Profile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 128px"
                    priority
                  />
                </div>

                {/* Character Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold text-black">LUKASZ</h3>
                    <div className="font-mono text-xs text-black/60">
                      {`[ ID: SYS-${new Date().getFullYear()}-002 ]`}
                    </div>
                  </div>

                  {/* Class & Role */}
                  <div className="font-mono text-sm text-black/80">
                    CLASS: CREATIVE MASTERMIND
                  </div>

                  {/* ASCII Stats Bars */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>DESIGN</span>
                        <span>95/100</span>
                      </div>
                      <pre className="text-rose-500/60 text-xs leading-none">
                        {`[█████████▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>INNOVATION</span>
                        <span>92/100</span>
                      </div>
                      <pre className="text-amber-500/60 text-xs leading-none">
                        {`[████████▒▒] `}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-black/60">
                        <span>STRATEGY</span>
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
                        "Brand Architecture",
                        "Creative Direction",
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
► CREATIVITY: OVERCLOCKED
► INSPIRATION: PEAK
► DESIGN_POWER: MAXIMUM`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Adjust System Breach Divider spacing */}
          <div className="flex items-center gap-4 mt-16">
            <div className="flex-1 h-[1px] bg-black/10" />
            <div className="font-mono text-xs text-black/30">SYSTEM BREACH</div>
            <div className="flex-1 h-[1px] bg-black/10" />
          </div>
        </div>

        {/* Side decoration */}
        <div className="absolute right-8 top-0 bottom-0 z-10 w-1 h-full bg-gradient-to-b from-transparent via-red-900 to-transparent shadow-[0_0_15px_rgba(255,0,0,0.7)] shadow-red-900/50 mix-blend-hard-light" />
      </section>

      {/* Portfolio Section - Moved down */}
      <section className="relative flex flex-col items-center justify-center py-20">
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

        <div className="relative z-10 mx-auto container space-y-16">
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
│╶┘ └╴│ │  LOADING PORTFOLIO...  │ │╶┘ └╴│
├── ○╴└─┘    PLEASE STANDBY      └─┘╶○ ──┤
│  ╭────╴ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ ╶────┐   │
└────┘     SHOWCASE INITIALIZED        └───┘`}
          </div> */}

          {/* Replace the old portfolio grid with the new component */}
          <PortfolioSection />

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="relative group overflow-hidden rounded-none"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#7f1d1d", // dark red base
                  backgroundImage: `url('/leather.png')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "200px",
                  imageRendering: "crisp-edges",
                  WebkitBackfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  opacity: 0.9,
                }}
              >
                {/* Darkening overlay - reduced opacity */}
                <div
                  className="absolute inset-0 bg-red-950/40"
                  style={{
                    mixBlendMode: "overlay",
                  }}
                />
                {/* Additional texture layer - adjusted colors and opacity */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-950/30 to-red-900/30"
                  style={{
                    mixBlendMode: "soft-light",
                  }}
                />
              </div>
              <span className="relative z-10 text-white">
                Let&apos;s Create Together
              </span>
            </Button>
          </div>

          {/* Move and modify the Status and Data Stream here */}
          <div className="text-center text-black/20 font-mono text-[10px] leading-none">
            {`010110 EXECUTING PROTOCOL 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://portfolio.render.complete ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="relative flex flex-col items-center justify-center py-20">
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

        <div className="relative z-10 mx-auto container space-y-16">
          {/* Header - Updated with new cyberpunk style */}
          <div className="text-center space-y-4">
            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1542349314-b0ceb4d90f2d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-center bg-cover">
              CONNECT
            </h1>

            <div className="flex flex-col items-center gap-2">
              <pre className="text-white/40 font-mono text-xs leading-none">
                {`╭──── NEURAL LINK ESTABLISHED ────╮
│    QUANTUM HANDSHAKE ACTIVE    │
╰─────────────────────────────────╯`}
              </pre>

              <div className="flex items-center gap-4 text-white/60 font-mono text-xs">
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

              <pre className="text-white/20 font-mono text-[10px] leading-none">
                {`◢████████████████████████████████◣
◢ SECURE CHANNEL ESTABLISHED ◣
◥██████████████████████████████████◤`}
              </pre>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendly Column */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-white/40 text-center">
                {`[ SCHEDULING_MATRIX_v${new Date().getFullYear()}.1 ]`}
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-white/5 blur-xl" />
                <div className="relative border border-white/20 backdrop-blur-sm">
                  <div className="bg-white w-full aspect-[4/3] p-4">
                    <div className="w-full h-full flex items-center justify-center text-black/60 font-mono">
                      CALENDLY WIDGET PLACEHOLDER
                    </div>
                  </div>
                </div>
              </div>

              <pre className="text-white/20 font-mono text-[10px] leading-none text-center">
                {`╔════════════════════════════╗
║    BOOKING SYSTEM ONLINE    ║
╚════════════════════════════╝`}
              </pre>
            </div>

            {/* Testimonial Column */}
            <div className="space-y-6">
              <div className="font-mono text-xs text-white/40 text-center">
                {`[ CLIENT_FEEDBACK_STREAM ]`}
              </div>

              <div className="relative h-full">
                <div className="absolute inset-0 bg-white/5 blur-xl" />
                <div className="relative border border-white/20 p-8 backdrop-blur-sm h-full">
                  <div className="text-4xl text-white/10 font-serif absolute top-4 right-4">
                    &quot;
                  </div>

                  <div className="space-y-6">
                    <p className="text-white/80 leading-relaxed">
                      &ldquo;Working with CosmicLyrics was an absolute pleasure.
                      Lukasz took our ideas and turned them into a sleek,
                      professional website that perfectly captures our brand. He
                      was incredibly patient, responsive, and proactive
                      throughout the process, nailing every detail we asked for.
                      The end result is a site that looks amazing, works
                      flawlessly, and has already received great feedback.
                      Highly recommend Lukasz and the team at CosmicLyrics for
                      anyone looking to elevate their online presence.&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <span className="text-white/60 font-mono text-xs">
                          K
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Kirutika</div>
                        <div className="text-white/60 font-mono text-sm">
                          CEO of Ambrosial Automations
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-500/60 font-mono text-xs">
                      <span className="inline-block w-2 h-2 bg-emerald-500/60 rounded-full animate-pulse" />
                      VERIFIED TESTIMONIAL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Display */}
          <div className="text-center text-white/20 font-mono text-[10px] leading-none">
            {`010110 CONNECTION CHANNELS ACTIVE 110101
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
║ SYS://ready.to.collaborate   ║
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`}
          </div>
        </div>

        {/* Updated side decoration - changed to royal blue */}
        <div className="absolute right-8 top-0 bottom-0 z-10 w-1 h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent shadow-[0_0_15px_rgba(37,99,235,0.7)] shadow-blue-600/50" />
      </section>
    </main>
  );
}

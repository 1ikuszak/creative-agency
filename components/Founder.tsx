import Image from "next/image";

export default function () {
  <section
    id="founders"
    className="relative flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-3 md:px-5 lg:px-7"
  >
    {/* ... (Founders section code remains unchanged) ... */}
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
╚═════════════════════════════════════╝`}
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
                src="https://drewmp.s3.eu-north-1.amazonaws.com/antek.jpg"
                alt="Antek Profile"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover"
                priority
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
                  &ldquo;Design is not just what it looks like, it&apos;s how it
                  works&rdquo;
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
                src="https://drewmp.s3.eu-north-1.amazonaws.com/luki.jpg"
                alt="Lukasz Profile"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover"
                priority
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
  </section>;
}

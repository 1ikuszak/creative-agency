import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-white text-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url('/leather.png')`,
            backgroundRepeat: "repeat",
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">CosmicLyrics</h3>
            <p className="text-black/60 text-sm">
              Transforming dream ideas into digital pieces.
            </p>
            <div className="flex gap-4">
              {/* Social Links */}
              <a
                href="#"
                className="text-black/60 hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">QUICK LINKS</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/about"
                className="text-black/60 hover:text-black transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-black/60 hover:text-black transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-black/60 hover:text-black transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-black/60 hover:text-black transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">SERVICES</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/services/web-development"
                className="text-black/60 hover:text-black transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/services/ui-ux-design"
                className="text-black/60 hover:text-black transition-colors"
              >
                UI/UX Design
              </Link>
              <Link
                href="/services/brand-strategy"
                className="text-black/60 hover:text-black transition-colors"
              >
                Brand Strategy
              </Link>
              <Link
                href="/services/digital-marketing"
                className="text-black/60 hover:text-black transition-colors"
              >
                Digital Marketing
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <p className="text-black/60">Warsaw, Poland</p>
              <p className="text-black/60">contact@cosmiclyrics.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-black/40 text-sm">
              © {new Date().getFullYear()} CosmicLyrics. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-black/40 hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-black/40 hover:text-black transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Cyberpunk Decoration */}
        <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>
    </footer>
  );
}
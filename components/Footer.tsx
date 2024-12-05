import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigationLinks } from "@/config/site";

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
            <h3 className="font-bold text-xl">{siteConfig.name}</h3>
            <p className="text-black/60 text-sm">
              Transforming dream ideas into digital pieces.
            </p>
            <div className="flex gap-4">
              {navigationLinks.footerLinks.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  {social.name === "Instagram" && (
                    <Image
                      src="/instagram.png"
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">QUICK LINKS</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              {navigationLinks.footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">SERVICES</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              {navigationLinks.footerLinks.services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-black/40">CONTACT</h4>
            <div className="space-y-2 text-sm">
              <p className="text-black/60">Warsaw, Poland</p>
              <p className="text-black/60">{siteConfig.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-black/40 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </div>
            <div className="flex gap-4 text-sm">
              {navigationLinks.footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black/40 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Cyberpunk Decoration */}
        <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>
    </footer>
  );
}

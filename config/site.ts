import { NavLinks } from "@/types/nav";

export const siteConfig = {
  name: "drewmp",
  url: "https://drewmp.com",
  email: "contact@drewmp.com",
  ogImage: "https://drewmp.com/og.jpg",
  description: "...",
  links: {
    instagram: "https://www.instagram.com/luki.zip/",
  },
};

export type SiteConfig = typeof siteConfig;

export const navigationLinks: NavLinks = {
  mainNav: [
    { name: "Services", href: "/#services" },
    { name: "Founders", href: "/#founders" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Connect", href: "/#connect" },
  ],
  footerLinks: {
    quickLinks: [
      { name: "Services", href: "/#services" },
      { name: "Founders", href: "/#founders" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Connect", href: "/#connect" },
    ],
    services: [
      { name: "Web Development", href: "/#portfolio" },
      { name: "UI/UX Design", href: "/#portfolio" },
      { name: "Brand Strategy", href: "/#portfolio" },
      { name: "Digital Marketing", href: "/#portfolio" },
    ],
    socials: [{ name: "Instagram", href: siteConfig.links.instagram }],
    legal: [
      { name: "Privacy Policy", href: "/" },
      { name: "Terms of Service", href: "/" },
    ],
  },
};

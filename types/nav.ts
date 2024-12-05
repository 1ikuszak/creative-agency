export interface NavItem {
  name: string;
  href: string;
}

export interface NavLinks {
  mainNav: NavItem[];
  footerLinks: {
    quickLinks: NavItem[];
    services: NavItem[];
    socials: NavItem[];
    legal: NavItem[];
  };
}

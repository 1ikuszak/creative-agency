export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type MainNavItem = NavItem;

export interface NavConfig {
  mainNav: MainNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
      description: "Return to homepage",
    },
    {
      title: "Services",
      href: "/#services",
      description: "Explore our services",
    },
    {
      title: "Portfolio",
      href: "/#portfolio",
      description: "View our work",
    },
    {
      title: "About",
      href: "/#about",
      description: "Learn about us",
    },
    {
      title: "Connect",
      href: "/#connect",
      description: "Get in touch",
    },
  ],
};

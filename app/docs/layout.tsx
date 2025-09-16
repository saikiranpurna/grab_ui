"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

// Icon components
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const ComponentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const BlocksIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

// Enhanced navigation data structure
const navigation = [
  {
    title: "Getting Started",
    icon: BookIcon,
    items: [
      { title: "Introduction", href: "/docs", description: "Get started with Grab UI" },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "How to install components",
      },
      {
        title: "Components Config",
        href: "/docs/components-json",
        description: "Configure your setup",
      },
      { title: "Theming", href: "/docs/theming", description: "Customize the appearance" },
      { title: "Dark Mode", href: "/docs/dark-mode", description: "Support for dark themes" },
      { title: "CLI", href: "/docs/cli", description: "Command line interface" },
    ],
  },
  {
    title: "Components",
    icon: ComponentIcon,
    items: [
      {
        title: "Button",
        href: "/docs/button-gui",
        description: "Clickable button component",
        badge: "New",
      },
      { title: "Card", href: "/docs/card", description: "Flexible content container" },
      { title: "Input", href: "/docs/input", description: "Text input field" },
      { title: "Label", href: "/docs/label", description: "Form field labels" },
      { title: "Textarea", href: "/docs/textarea", description: "Multi-line text input" },
    ],
  },
  {
    title: "Blocks",
    icon: BlocksIcon,
    items: [
      {
        title: "Authentication",
        href: "/docs/blocks/authentication",
        description: "Login and signup forms",
      },
      {
        title: "Dashboard",
        href: "/docs/blocks/dashboard",
        description: "Admin dashboard layouts",
      },
      { title: "Forms", href: "/docs/blocks/forms", description: "Complete form examples" },
    ],
  },
];

// Enhanced Sidebar Component
const Sidebar = () => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Getting Started",
    "Components",
    "Blocks",
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    );
  };

  const isActive = (href: string) => {
    if (href === "/docs") {
      return pathname === "/docs";
    }
    return pathname === href;
  };

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-[280px] shrink-0 overflow-y-auto glassmorphism-sidebar md:sticky md:block lg:w-[300px]">
      <div className="relative overflow-hidden h-full py-6 px-6 lg:py-8 gradient-overlay-light dark:gradient-overlay-dark">
        <div className="w-full space-y-1">
          {navigation.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            const IconComponent = section.icon;
            return (
              <div key={section.title} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center gap-2 glassmorphism-button px-3 py-2 text-sm font-medium transition-all hover:scale-[1.02] focus:scale-[1.02] focus:outline-none text-foreground"
                >
                  <IconComponent className="h-4 w-4 text-primary" />
                  <span className="flex-1 text-left">{section.title}</span>
                  <div className="p-0.5 rounded-full glassmorphism">
                    {isExpanded ? (
                      <ChevronDownIcon className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <ChevronRightIcon className="h-3 w-3 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-0.5 border-l border-primary/20 pl-4">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group relative flex w-full items-center gap-2 glassmorphism-button px-3 py-2 text-sm transition-all hover:scale-[1.01] ${
                          isActive(item.href)
                            ? "glassmorphism-card text-primary font-medium border-primary/30"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="inline-flex items-center glassmorphism px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                        {isActive(item.href) && (
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Search hint at bottom */}
        <div className="absolute bottom-4 left-6 right-6">
          <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  ⌘K
                </kbd>
              </div>
              <span>to search</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Enhanced Table of Contents Component
const TableOfContents = () => {
  const [activeId, setActiveId] = useState("");

  // This would be enhanced with actual scroll detection in a real implementation
  const tocItems = [
    { id: "installation", title: "Installation" },
    { id: "usage", title: "Usage" },
    { id: "api", title: "API Reference" },
    { id: "examples", title: "Examples" },
    { id: "accessibility", title: "Accessibility" },
  ];

  return (
    <div className="hidden text-sm xl:block">
      <div className="sticky top-20 -mt-10 pt-4">
        <div className="sticky top-20 -mt-10 h-[calc(100vh-5rem)] overflow-hidden pt-6">
          <div className="glassmorphism-card p-4 space-y-3">
            <div className="flex items-center gap-2 pb-2">
              <div className="h-1 w-1 rounded-full bg-gradient-to-r from-primary to-purple-500" />
              <p className="font-semibold text-foreground">On This Page</p>
            </div>
            <nav className="space-y-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block glassmorphism-button px-3 py-1.5 text-sm transition-all hover:scale-[1.01] ${
                    activeId === item.id
                      ? "glassmorphism text-primary font-medium border-l-2 border-primary pl-2"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* Additional quick links */}
            <div className="pt-4 mt-4 border-t border-primary/20">
              <p className="text-xs font-medium text-muted-foreground mb-2">Quick Links</p>
              <div className="space-y-1">
                <button
                  type="button"
                  className="glassmorphism-button block text-xs text-muted-foreground hover:text-primary transition-all text-left w-full px-2 py-1 hover:scale-[1.01]"
                >
                  Edit this page
                </button>
                <button
                  type="button"
                  className="glassmorphism-button block text-xs text-muted-foreground hover:text-primary transition-all text-left w-full px-2 py-1 hover:scale-[1.01]"
                >
                  Report an issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Breadcrumb Component
const Breadcrumb = ({ items }: { items: { title: string; href?: string }[] }) => {
  return (
    <nav className="glassmorphism p-3 mb-6 border border-primary/20">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <svg
                className="h-4 w-4 text-muted-foreground/50"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.title}
              </Link>
            ) : (
              <span className="text-foreground font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                {item.title}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

// Main Layout Component
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Header */}
      <Header />

      {/* Mobile sidebar overlay */}
      <div className="md:hidden">{/* This would be a mobile sidebar implementation */}</div>

      {/* Full-width layout with proper centering */}
      <div className="flex w-full h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 min-w-0 w-full overflow-x-hidden glassmorphism-card border-l border-primary/20">
          <div className="w-full max-w-none h-full gradient-overlay-light dark:gradient-overlay-dark">
            <div className="xl:grid xl:grid-cols-[1fr_280px] xl:gap-8 2xl:gap-12 h-full">
              <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10 xl:px-12">
                <div className="max-w-4xl">
                  <div className="space-y-2">
                    <div className="glassmorphism p-3 mb-6 border border-primary/20">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Link href="/docs" className="hover:text-primary transition-colors">
                          Docs
                        </Link>
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-foreground font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          Current Page
                        </span>
                      </div>
                    </div>
                    <div className="glassmorphism-card p-6 prose prose-slate dark:prose-invert max-w-none border border-primary/20">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden xl:block px-4 py-6 lg:py-10">
                <TableOfContents />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

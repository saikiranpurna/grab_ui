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

const ExampleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const PropsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Navigation data structure focused on component documentation and examples
const navigation = [
  {
    title: "Form Components",
    icon: ComponentIcon,
    items: [
      {
        title: "Button",
        href: "/components/button",
        description: "Clickable button with glassmorphism effects",
        props: ["variant", "size", "disabled", "children"],
        examples: ["Default", "Variants", "Sizes", "Loading", "Icons"],
      },
      {
        title: "Input",
        href: "/components/input",
        description: "Text input field with validation support",
        props: ["type", "placeholder", "disabled", "required"],
        examples: ["Basic", "With Label", "Error State", "Icon Input"],
      },
      {
        title: "Textarea",
        href: "/components/textarea",
        description: "Multi-line text input component",
        props: ["rows", "placeholder", "disabled", "maxLength"],
        examples: ["Basic", "Resizable", "Character Count", "Auto-resize"],
      },
      {
        title: "Label",
        href: "/components/label",
        description: "Form field labels with accessibility",
        props: ["htmlFor", "required", "optional"],
        examples: ["Basic", "Required", "Optional", "With Helper"],
      },
    ],
  },
  {
    title: "Layout Components",
    icon: ComponentIcon,
    items: [
      {
        title: "Card",
        href: "/components/card",
        description: "Flexible content container with glassmorphism",
        props: ["variant", "padding", "hover", "clickable"],
        examples: ["Basic", "With Header", "Hover Effects", "Nested Cards"],
      },
      {
        title: "Container",
        href: "/components/container",
        description: "Responsive container with max-width",
        props: ["size", "center", "padding"],
        examples: ["Sizes", "Centered", "Fluid", "Breakpoints"],
      },
      {
        title: "Grid",
        href: "/components/grid",
        description: "CSS Grid layout component",
        props: ["cols", "gap", "responsive"],
        examples: ["Basic Grid", "Responsive", "Auto-fit", "Complex"],
      },
    ],
  },
  {
    title: "Interactive Components",
    icon: ComponentIcon,
    items: [
      {
        title: "Modal",
        href: "/components/modal",
        description: "Modal dialog with glassmorphism backdrop",
        props: ["open", "onClose", "size", "backdrop"],
        examples: ["Basic", "Sizes", "Custom Backdrop", "Nested"],
      },
      {
        title: "Dropdown",
        href: "/components/dropdown",
        description: "Dropdown menu with animations",
        props: ["trigger", "placement", "offset"],
        examples: ["Basic", "Positions", "Custom Trigger", "Menu Items"],
      },
      {
        title: "Tooltip",
        href: "/components/tooltip",
        description: "Contextual tooltip with positioning",
        props: ["content", "placement", "delay"],
        examples: ["Basic", "Positions", "Custom Content", "Triggers"],
      },
    ],
  },
];

// Enhanced Scrollable Sidebar Component
const ComponentsSidebar = () => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Form Components",
    "Layout Components",
    "Interactive Components",
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    );
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <aside className="fixed top-16 z-30 h-[calc(100vh-4rem)] w-[320px] shrink-0 glassmorphism-sidebar border-r border-primary/20">
      {/* Header */}
      <div className="p-4 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <ComponentIcon className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-foreground">Components</h2>
          <span className="text-xs text-muted-foreground">Examples & Props</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto h-[calc(100vh-8rem)] p-4">
        <div className="space-y-2">
          {navigation.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            const IconComponent = section.icon;

            return (
              <div key={section.title} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center gap-3 glassmorphism-button px-3 py-2 text-sm font-medium transition-all hover:scale-[1.01] focus:scale-[1.01] focus:outline-none text-foreground rounded-lg"
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
                  <div className="ml-4 space-y-1 border-l border-primary/20 pl-4">
                    {section.items.map((item) => (
                      <div key={item.href} className="space-y-1">
                        <Link
                          href={item.href}
                          className={`group relative flex w-full items-start gap-2 glassmorphism-button px-3 py-2 text-sm transition-all hover:scale-[1.01] rounded-lg ${
                            isActive(item.href)
                              ? "glassmorphism-card text-primary font-medium border-primary/30"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.title}</span>
                            </div>
                            <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-2">
                              {item.description}
                            </p>

                            {/* Props Preview */}
                            <div className="mt-2 flex flex-wrap gap-1">
                              {item.props.slice(0, 3).map((prop) => (
                                <span
                                  key={prop}
                                  className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-primary/80 bg-primary/10 rounded border border-primary/20"
                                >
                                  {prop}
                                </span>
                              ))}
                              {item.props.length > 3 && (
                                <span className="text-[10px] text-muted-foreground">
                                  +{item.props.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          {isActive(item.href) && (
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-full" />
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer with Search Hint */}
      <div className="p-4 border-t border-primary/20">
        <div className="glassmorphism p-3 text-xs text-muted-foreground rounded-lg">
          <div className="flex items-center gap-2">
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              ⌘K
            </kbd>
            <span>to search components</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

// Component Properties Panel
const ComponentPropsPanel = ({ componentName }: { componentName?: string }) => {
  const [activeTab, setActiveTab] = useState<"props" | "examples">("props");

  // Mock data - in real app this would come from component analysis
  const componentData = {
    button: {
      props: [
        {
          name: "variant",
          type: "'default' | 'outline' | 'glass' | 'ghost'",
          default: "'default'",
          description: "Visual style variant of the button",
        },
        {
          name: "size",
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          description: "Size of the button",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the button is disabled",
        },
        {
          name: "children",
          type: "ReactNode",
          default: "undefined",
          description: "Button content",
        },
      ],
      examples: [
        { name: "Default Button", code: "<Button>Click me</Button>" },
        { name: "Outline Variant", code: '<Button variant="outline">Outline</Button>' },
        { name: "Glass Effect", code: '<Button variant="glass">Glass</Button>' },
        { name: "Large Size", code: '<Button size="lg">Large Button</Button>' },
      ],
    },
  };

  const currentComponent = componentData.button; // For demo purposes

  return (
    <div className="hidden xl:block">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
        <div className="glassmorphism-card h-full flex flex-col border border-primary/20">
          {/* Header */}
          <div className="p-4 border-b border-primary/20">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Component Info</h3>
              <div className="flex items-center gap-1 p-1 glassmorphism rounded-lg">
                <button
                  onClick={() => setActiveTab("props")}
                  className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                    activeTab === "props"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <PropsIcon className="h-3 w-3 inline mr-1" />
                  Props
                </button>
                <button
                  onClick={() => setActiveTab("examples")}
                  className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                    activeTab === "examples"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ExampleIcon className="h-3 w-3 inline mr-1" />
                  Examples
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "props" && currentComponent && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {currentComponent.props.map((prop) => (
                    <div
                      key={prop.name}
                      className="glassmorphism p-3 rounded-lg border border-primary/20"
                    >
                      <div className="flex items-start justify-between">
                        <code className="text-sm font-semibold text-primary">{prop.name}</code>
                        <span className="text-xs text-muted-foreground px-2 py-0.5 glassmorphism rounded">
                          {prop.default}
                        </span>
                      </div>
                      <div className="mt-1">
                        <code className="text-xs text-muted-foreground font-mono">{prop.type}</code>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{prop.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "examples" && currentComponent && (
              <div className="space-y-4">
                {currentComponent.examples.map((example, index) => (
                  <div
                    key={index}
                    className="glassmorphism p-3 rounded-lg border border-primary/20"
                  >
                    <h4 className="text-sm font-medium text-foreground mb-2">{example.name}</h4>
                    <div className="glassmorphism p-2 rounded font-mono text-xs text-muted-foreground border border-primary/20">
                      {example.code}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header />

      <div className="flex w-full h-[calc(100vh-4rem)]">
        <ComponentsSidebar />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 w-full overflow-x-hidden glassmorphism-card border-l border-primary/20 ml-[320px]">
          <div className="w-full max-w-none h-full gradient-overlay-light dark:gradient-overlay-dark">
            <div className="xl:grid xl:grid-cols-[1fr_300px] xl:gap-6 h-full">
              {/* Content Area */}
              <div className="px-6 py-8 overflow-y-auto">
                <div className="max-w-4xl">
                  {/* Breadcrumb */}
                  <div className="glassmorphism p-3 mb-6 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Link href="/" className="hover:text-primary transition-colors">
                        Home
                      </Link>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Link href="/components" className="hover:text-primary transition-colors">
                        Components
                      </Link>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Current Component
                      </span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="glassmorphism-card p-8 prose prose-slate dark:prose-invert max-w-none border border-primary/20 rounded-lg">
                    {children}
                  </div>
                </div>
              </div>

              {/* Props Panel */}
              <div className="px-4 py-8">
                <ComponentPropsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

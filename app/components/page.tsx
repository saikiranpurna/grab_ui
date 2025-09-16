import React from "react";
import { ButtonGUI } from "@/registry/default/blocks/ButtonGUI";

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🧩</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Component Library
            </h1>
            <p className="text-muted-foreground">
              Interactive examples and comprehensive documentation for all components
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="glassmorphism-card p-6 border border-primary/20">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            🎨 Glassmorphism Components
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our component library features beautiful glassmorphism effects with backdrop blur,
            transparency, and elegant animations. Each component is built with accessibility in mind
            and supports both light and dark themes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Form Components",
                count: "4 components",
                description: "Buttons, inputs, labels, and textareas",
                icon: "📝",
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Layout Components",
                count: "3 components",
                description: "Cards, containers, and grid layouts",
                icon: "🏗️",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Interactive Components",
                count: "3 components",
                description: "Modals, dropdowns, and tooltips",
                icon: "⚡",
                color: "from-pink-500 to-blue-500",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="glassmorphism p-4 border border-primary/20 hover:scale-105 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-lg mb-3 group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.title}</h3>
                <p className="text-xs text-primary font-medium mb-2">{category.count}</p>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Examples Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">✨ Live Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Button Examples */}
          <div className="glassmorphism-card p-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Button Variants</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <ButtonGUI>Default</ButtonGUI>
                <ButtonGUI variant="outline">Outline</ButtonGUI>
                <ButtonGUI variant="glass">Glass</ButtonGUI>
                <ButtonGUI variant="ghost">Ghost</ButtonGUI>
              </div>

              <div className="glassmorphism p-3 border border-primary/20 rounded font-mono text-xs">
                <div className="text-muted-foreground">
                  <span className="text-purple-500">import</span>{" "}
                  <span className="text-primary">{"{ ButtonGUI }"}</span>{" "}
                  <span className="text-purple-500">from</span>{" "}
                  <span className="text-pink-500">&quot;grab-ui&quot;</span>
                </div>
                <div className="mt-2 text-muted-foreground">
                  <span className="text-primary">&lt;ButtonGUI</span>{" "}
                  <span className="text-yellow-500">variant=</span>
                  <span className="text-pink-500">&quot;glass&quot;</span>
                  <span className="text-primary">&gt;</span>
                  Glass Button
                  <span className="text-primary">&lt;/ButtonGUI&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Preview */}
          <div className="glassmorphism-card p-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Interactive Preview</h3>
            <div className="space-y-4">
              <div className="glassmorphism p-4 border border-primary/20 rounded-lg text-center">
                <p className="text-muted-foreground mb-4">Hover over buttons to see effects</p>
                <div className="flex justify-center gap-3">
                  <ButtonGUI size="sm">Small</ButtonGUI>
                  <ButtonGUI size="md">Medium</ButtonGUI>
                  <ButtonGUI size="lg">Large</ButtonGUI>
                </div>
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>
                  • <strong>Hover:</strong> Scale and glow effects
                </p>
                <p>
                  • <strong>Focus:</strong> Accessibility-compliant focus rings
                </p>
                <p>
                  • <strong>Active:</strong> Subtle press animations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">🚀 Getting Started</h2>

        <div className="glassmorphism-card p-6 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quick Start</h3>
              <div className="space-y-3">
                <div className="glassmorphism p-3 border border-primary/20 rounded">
                  <p className="text-xs text-muted-foreground mb-1">1. Install package</p>
                  <code className="text-sm text-primary font-mono">npm install grab-ui</code>
                </div>

                <div className="glassmorphism p-3 border border-primary/20 rounded">
                  <p className="text-xs text-muted-foreground mb-1">2. Import component</p>
                  <code className="text-sm text-muted-foreground font-mono">
                    <span className="text-purple-500">import</span>{" "}
                    <span className="text-primary">{"{ ButtonGUI }"}</span>{" "}
                    <span className="text-purple-500">from</span>{" "}
                    <span className="text-pink-500">&quot;grab-ui&quot;</span>
                  </code>
                </div>

                <div className="glassmorphism p-3 border border-primary/20 rounded">
                  <p className="text-xs text-muted-foreground mb-1">3. Use in your app</p>
                  <code className="text-sm text-muted-foreground font-mono">
                    <span className="text-primary">&lt;ButtonGUI&gt;</span>
                    Hello World
                    <span className="text-primary">&lt;/ButtonGUI&gt;</span>
                  </code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Features</h3>
              <div className="space-y-2">
                {[
                  "✨ Glassmorphism effects with backdrop blur",
                  "🌙 Built-in dark mode support",
                  "♿ Full accessibility compliance",
                  "📱 Mobile-first responsive design",
                  "⚡ Optimized performance",
                  "🎨 Customizable theme system",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">{feature.split(" ")[0]}</span>
                    <span>{feature.substring(feature.indexOf(" ") + 1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="space-y-4">
        <div className="glassmorphism-card p-6 border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-4">🧭 Explore Components</h3>
          <p className="text-muted-foreground mb-4">
            Use the sidebar to navigate through different component categories. Each component page
            includes props documentation, live examples, and usage guidelines.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="glassmorphism px-3 py-1.5 text-xs text-muted-foreground border border-primary/20">
              ← Sidebar navigation
            </span>
            <span className="glassmorphism px-3 py-1.5 text-xs text-muted-foreground border border-primary/20">
              Props documentation →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

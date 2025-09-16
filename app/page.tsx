import React from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { ButtonGUI } from "../registry/default/blocks/ButtonGUI";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Subtle Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Version Badge */}
              <div className="inline-flex items-center gap-2 glassmorphism px-3 py-1.5 border border-primary/30 text-xs font-medium text-primary mb-8 hover:scale-105 transition-transform">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Version 2.0 • Glassmorphism Design
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Grab UI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                Beautiful React components with glassmorphism design, dark mode support, and modern
                animations. Build stunning interfaces effortlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/docs">
                  <ButtonGUI size="lg" className="w-full sm:w-auto px-8">
                    Get Started
                  </ButtonGUI>
                </Link>
                <Link href="/demo">
                  <ButtonGUI variant="outline" size="lg" className="w-full sm:w-auto px-8">
                    Live Demo
                  </ButtonGUI>
                </Link>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["Glassmorphism", "Dark Mode", "TypeScript", "Accessible", "Fast"].map((tag) => (
                  <span
                    key={tag}
                    className="glassmorphism px-3 py-1 text-xs font-medium text-muted-foreground border border-primary/20 hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Why developers love Grab UI
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build modern, accessible, and beautiful user interfaces
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Glassmorphism Design",
                  description:
                    "Beautiful frosted glass effects with backdrop blur and transparency",
                  icon: "✨",
                  color: "from-blue-500 to-purple-500",
                },
                {
                  title: "Dark Mode Ready",
                  description: "Seamless theme switching with smooth transitions and persistence",
                  icon: "🌙",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Fully Accessible",
                  description:
                    "WCAG compliant components with keyboard navigation and screen readers",
                  icon: "♿",
                  color: "from-pink-500 to-red-500",
                },
                {
                  title: "TypeScript First",
                  description:
                    "Built with TypeScript for excellent developer experience and type safety",
                  icon: "🔷",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Lightning Fast",
                  description: "Optimized performance with tree-shaking and minimal bundle size",
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Mobile First",
                  description: "Responsive design with touch-friendly interactions for all devices",
                  icon: "📱",
                  color: "from-green-500 to-teal-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glassmorphism-card p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-lg mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Component Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="glassmorphism-card p-8 md:p-12 border border-primary/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Rich Component Library
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  30+ components and blocks ready to use in your projects
                </p>
              </div>

              {/* Component Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: "Button", emoji: "🔘" },
                  { name: "Card", emoji: "🃏" },
                  { name: "Input", emoji: "📝" },
                  { name: "Modal", emoji: "🪟" },
                  { name: "Badge", emoji: "🏷️" },
                  { name: "Avatar", emoji: "�" },
                  { name: "Tooltip", emoji: "�" },
                  { name: "Dropdown", emoji: "📋" },
                  { name: "Tabs", emoji: "🗂️" },
                  { name: "Progress", emoji: "📊" },
                ].map((component, index) => (
                  <div
                    key={index}
                    className="glassmorphism p-4 border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-200 text-center group cursor-pointer"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {component.emoji}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {component.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/docs">
                  <ButtonGUI variant="outline">View All Components</ButtonGUI>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism-card p-8 md:p-12 border border-primary/20 text-center">
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Get started in seconds
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Install</h3>
                  <div className="glassmorphism p-4 border border-primary/20 rounded-lg">
                    <code className="font-mono text-sm text-primary">npm install grab-ui</code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Import & Use</h3>
                  <div className="glassmorphism p-4 border border-primary/20 rounded-lg">
                    <code className="font-mono text-sm text-muted-foreground">
                      <span className="text-purple-500">import</span>{" "}
                      <span className="text-primary">{"{ Button }"}</span>{" "}
                      <span className="text-purple-500">from</span>{" "}
                      <span className="text-pink-500">{`'grab-ui'`}</span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/docs">
                  <ButtonGUI size="lg">Read Documentation</ButtonGUI>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="glassmorphism-card border-t border-primary/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Grab UI
              </span>
              <span className="text-muted-foreground text-sm">• Modern React Components</span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/demo"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Examples
              </Link>
              <Link
                href="/typography"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Typography
              </Link>
              <a
                href="https://github.com/saikiranpurna/grab_ui"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-primary/20">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Grab UI. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

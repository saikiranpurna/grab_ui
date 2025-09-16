import React from "react";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="glassmorphism-card p-8 border border-primary/20">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Grab UI
        </h1>
        <p className="leading-7 text-lg text-muted-foreground mt-4">
          Beautifully designed components with glassmorphism effects that you can copy and paste
          into your apps.
          <span className="text-primary font-medium">Accessible</span>.
          <span className="text-purple-500 font-medium">Customizable</span>.
          <span className="text-pink-500 font-medium">Open Source</span>.
        </p>
        <div className="flex gap-3 mt-6">
          <div className="glassmorphism-button px-4 py-2 border border-primary/30 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:scale-105 transition-all cursor-pointer">
            <span className="text-primary font-medium">🚀 Get Started</span>
          </div>
          <div className="glassmorphism-button px-4 py-2 border border-primary/20 hover:scale-105 transition-all cursor-pointer">
            <span className="text-foreground">📖 Documentation</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="glassmorphism-card p-6 border border-primary/20">
          <h2
            id="installation"
            className="scroll-m-20 pb-3 text-3xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
          >
            Installation
          </h2>
          <p className="leading-7 text-muted-foreground">
            Use the CLI to add components to your project with glassmorphism effects.
          </p>
        </div>

        <div className="space-y-4">
          <div className="glassmorphism-card p-6 border border-primary/20">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary mb-3">
              Initialize your project
            </h3>
            <p className="leading-7 text-muted-foreground mb-4">
              Start by initializing your project with the CLI:
            </p>
            <div className="glassmorphism p-4 font-mono text-sm border border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <pre className="overflow-x-auto">
                <code className="text-primary">npx shadcn-ui@latest init</code>
              </pre>
            </div>
          </div>

          <div className="glassmorphism-card p-6 border border-primary/20">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary mb-3">
              Add components
            </h3>
            <p className="leading-7 text-muted-foreground mb-4">Add components to your project:</p>
            <div className="glassmorphism p-4 font-mono text-sm border border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <pre className="overflow-x-auto">
                <code className="text-primary">npx shadcn-ui@latest add button</code>
              </pre>
            </div>
          </div>

          <div className="glassmorphism-card p-6 border border-primary/20">
            <h3
              id="usage"
              className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary mb-3"
            >
              Usage
            </h3>
            <div className="glassmorphism p-4 font-mono text-sm border border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <pre className="overflow-x-auto">
                <code className="text-muted-foreground">{`import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glassmorphism-card p-6 border border-primary/20">
          <h2
            id="examples"
            className="scroll-m-20 pb-3 text-3xl font-semibold tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
          >
            Examples
          </h2>
          <p className="leading-7 text-muted-foreground">
            Check out some examples built with Grab UI glassmorphism components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism-card p-6 border border-primary/20 hover:scale-[1.02] transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500" />
              <h3 className="font-semibold text-primary group-hover:text-purple-500 transition-colors">
                Dashboard
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A complete dashboard built with Grab UI glassmorphism components and beautiful
              gradient effects.
            </p>
          </div>
          <div className="glassmorphism-card p-6 border border-primary/20 hover:scale-[1.02] transition-all group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <h3 className="font-semibold text-primary group-hover:text-pink-500 transition-colors">
                Authentication
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Login and signup forms with validation, glassmorphism styling, and smooth animations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

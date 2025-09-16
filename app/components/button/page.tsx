import React from "react";
import { ButtonGUI } from "@/registry/default/blocks/ButtonGUI";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">🔘</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Button
            </h1>
            <p className="text-lg text-muted-foreground">
              Displays a button with glassmorphism effects and theme support
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Example</h2>

        <div className="glassmorphism-card p-6 border border-primary/20">
          <div className="space-y-6">
            <div className="glassmorphism p-8 border border-primary/20 rounded-lg text-center">
              <ButtonGUI>Click me</ButtonGUI>
            </div>

            <div className="glassmorphism p-4 border border-primary/20 rounded-lg">
              <div className="text-xs text-muted-foreground mb-2">React</div>
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">&lt;ButtonGUI&gt;</span>
                Click me
                <span className="text-primary">&lt;/ButtonGUI&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Variants</h2>

        <div className="glassmorphism-card p-6 border border-primary/20">
          <div className="space-y-6">
            <div className="glassmorphism p-8 border border-primary/20 rounded-lg">
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGUI variant="default">Default</ButtonGUI>
                <ButtonGUI variant="outline">Outline</ButtonGUI>
                <ButtonGUI variant="glass">Glass</ButtonGUI>
                <ButtonGUI variant="ghost">Ghost</ButtonGUI>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>

        <div className="glassmorphism-card p-6 border border-primary/20">
          <div className="space-y-6">
            <div className="glassmorphism p-8 border border-primary/20 rounded-lg">
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <ButtonGUI size="sm">Small</ButtonGUI>
                <ButtonGUI size="md">Medium</ButtonGUI>
                <ButtonGUI size="lg">Large</ButtonGUI>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Props Reference</h2>

        <div className="glassmorphism-card p-6 border border-primary/20">
          <div className="space-y-4">
            {[
              {
                prop: "variant",
                type: "string",
                default: "default",
                description: "Button visual style variant",
              },
              {
                prop: "size",
                type: "string",
                default: "md",
                description: "Button size",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the button is disabled",
              },
              {
                prop: "children",
                type: "ReactNode",
                default: "undefined",
                description: "Button content",
              },
            ].map((row, index) => (
              <div key={index} className="glassmorphism p-4 border border-primary/20 rounded">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Property</div>
                    <code className="text-sm font-mono text-primary">{row.prop}</code>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Type</div>
                    <code className="text-sm font-mono text-muted-foreground">{row.type}</code>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Default</div>
                    <code className="text-sm font-mono text-muted-foreground">{row.default}</code>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Description</div>
                    <span className="text-sm text-muted-foreground">{row.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

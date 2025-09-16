import React from "react";

export default function ButtonGUIDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          ButtonGUI
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A flexible, accessible, and themeable button component for Grab UI. It supports multiple
          variants, sizes, and composition patterns.
        </p>
      </div>

      <div className="space-y-6">
        <h2
          id="installation"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        >
          Installation
        </h2>
        <div className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          <pre className="overflow-x-auto">
            <code>npx shadcn-ui@latest add button</code>
          </pre>
        </div>
      </div>

      <div className="space-y-6">
        <h2 id="usage" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          <pre className="overflow-x-auto">
            <code>{`import { ButtonGUI } from '@/components/ButtonGUI';

<ButtonGUI>Click me</ButtonGUI>
<ButtonGUI variant="outline">Outline</ButtonGUI>
<ButtonGUI variant="ghost" size="sm">Ghost Small</ButtonGUI>`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-6">
        <h2 id="api" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          API Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-4 py-2 text-left">Prop</th>
                <th className="border border-border px-4 py-2 text-left">Type</th>
                <th className="border border-border px-4 py-2 text-left">Default</th>
                <th className="border border-border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">variant</td>
                <td className="border border-border px-4 py-2">
                  &quot;default&quot; | &quot;outline&quot; | &quot;ghost&quot;
                </td>
                <td className="border border-border px-4 py-2">&quot;default&quot;</td>
                <td className="border border-border px-4 py-2">Visual style of the button</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">size</td>
                <td className="border border-border px-4 py-2">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="border border-border px-4 py-2">&quot;md&quot;</td>
                <td className="border border-border px-4 py-2">Button size</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">disabled</td>
                <td className="border border-border px-4 py-2">boolean</td>
                <td className="border border-border px-4 py-2">false</td>
                <td className="border border-border px-4 py-2">Disables the button</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">asChild</td>
                <td className="border border-border px-4 py-2">boolean</td>
                <td className="border border-border px-4 py-2">false</td>
                <td className="border border-border px-4 py-2">
                  Render as child element (for composition)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-6">
        <h2
          id="examples"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Examples
        </h2>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Variants</h3>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Default
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Outline
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Ghost
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 text-xs">
              Small
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Medium
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              Large
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2
          id="accessibility"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
        >
          Accessibility
        </h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Keyboard and screen reader accessible by default.</li>
          <li>Follows WAI-ARIA button patterns.</li>
          <li>Supports focus management and keyboard navigation.</li>
        </ul>
      </div>
    </div>
  );
}

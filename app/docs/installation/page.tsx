import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/docs/breadcrumb";
import CodeBlock from "@/components/docs/code-block";
import Prerequisites from "@/components/docs/prerequisites";
import AlternativeMethods from "@/components/docs/alternative-methods";
import DocNavigation from "@/components/docs/doc-navigation";

const Installation = () => {
  const breadcrumbItems = [{ label: "Docs" }, { label: "Installation", isActive: true }];

  const packageCommands = [
    {
      name: "pnpm",
      command: "pnpm dlx shadcn@latest add https://grab-ui-registry.netlify.app/r/button-gui.json",
    },
    {
      name: "npm",
      command: "npx shadcn@latest add https://grab-ui-registry.netlify.app/r/button-gui.json",
    },
    {
      name: "yarn",
      command: "yarn dlx shadcn@latest add https://grab-ui-registry.netlify.app/r/button-gui.json",
    },
    {
      name: "bun",
      command: "bunx shadcn@latest add https://grab-ui-registry.netlify.app/r/button-gui.json",
    },
  ];

  const prerequisiteItems = [
    "A Next.js or React project set up",
    "Tailwind CSS configured",
    "shadcn/ui CLI installed globally",
  ];

  const alternativeMethods = [
    {
      title: "Manual Copy & Paste",
      description: "You can also manually copy and paste components from our registry:",
      steps: [
        { text: "Browse to the component page in our documentation" },
        { text: "Copy the component code" },
        { text: "Create a new file in your project" },
        { text: "Paste the code and install required dependencies" },
      ],
    },
    {
      title: "CLI Installation",
      description: "Install the shadcn CLI globally if you haven't already:",
      codeExample: "npm install -g shadcn-ui@latest",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="space-y-6">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation</h1>
          <p className="text-lg text-gray-600">
            How to install Grab UI components in your project.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-700 leading-relaxed">
            It doesn&apos;t matter what framework or package manager you are using. Installing Grab
            UI components is as simple as running the{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">shadcn add</code> command
            followed by the URL to the component you want to install. This URL will always be
            formatted as{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              https://grab-ui-registry.netlify.app/r/&lt;component-name&gt;.json
            </code>
            .
          </p>

          <p className="text-gray-700 leading-relaxed">
            The entire install process is handled by the{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">shadcn</code> CLI tool and works
            identically to how you would install any other Shadcn component.
          </p>
        </div>

        <Prerequisites items={prerequisiteItems} />

        {/* Example Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example</h2>
          <CodeBlock commands={packageCommands} />
        </section>

        <AlternativeMethods methods={alternativeMethods} />

        {/* Next Steps */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-4">
            Once you&apos;ve installed a component, you can start using it in your project. Check
            out our component documentation for usage examples and API references.
          </p>
          <Link
            href="/docs/components/button"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Components
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>

      <DocNavigation
        previousLink={{ label: "Introduction", href: "/docs/introduction" }}
        nextLink={{ label: "Button Component", href: "/docs/button" }}
      />
    </div>
  );
};

export default Installation;

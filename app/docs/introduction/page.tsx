import React from "react";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>Docs</span>
        <span className="mx-2">›</span>
        <span className="text-gray-900">Introduction</span>
      </nav>

      {/* Main Content */}
      <div className="space-y-6">
        <header>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Introduction</h1>
          <p className="text-lg text-gray-600">
            Grab UI is a collection of accessible components built for use with React and Next.js.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Just like Shadcn, this is not a component library. Instead it is a{" "}
            <strong>collection of components</strong> that you can use to build your own component
            library. These components are designed to be accessible and customizable, so you can
            easily integrate them into your projects.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Each component in this library is built to solve specific problems that most developers
            face while building web applications (such as asynchronous actions, form validation,
            etc.).
          </p>

          <p className="text-gray-700 leading-relaxed">
            If there are any components that you would like to see added to this library, please
            feel free to open an issue on the{" "}
            <Link
              href="https://github.com/saikiranpurna/grab_ui"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </Link>
            .
          </p>
        </div>

        {/* Key Features */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Built with TypeScript for type safety</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Fully accessible with WAI-ARIA compliance</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Customizable with Tailwind CSS and CSS variables
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Copy and paste components - no package dependencies
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Glassmorphism design system with modern aesthetics
              </span>
            </li>
          </ul>
        </section>

        {/* Getting Started */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            Ready to start building with Grab UI? Check out our installation guide to get up and
            running quickly.
          </p>
          <Link
            href="/docs/installation"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <div />
        <Link
          href="/docs/installation"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Installation
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;

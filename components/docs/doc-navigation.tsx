import React from "react";
import Link from "next/link";

interface NavigationLink {
  label: string;
  href: string;
}

interface DocNavigationProps {
  previousLink?: NavigationLink;
  nextLink?: NavigationLink;
}

const DocNavigation: React.FC<DocNavigationProps> = ({ previousLink, nextLink }) => {
  return (
    <div className="flex justify-between items-center pt-8 border-t border-gray-200">
      <div>
        {previousLink ? (
          <Link
            href={previousLink.href}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {previousLink.label}
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div>
        {nextLink ? (
          <Link
            href={nextLink.href}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            {nextLink.label}
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default DocNavigation;

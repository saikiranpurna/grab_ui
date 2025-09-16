import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={item.isActive ? "text-gray-900" : "text-gray-500"}>
            {item.href ? (
              <a href={item.href} className="hover:text-gray-700">
                {item.label}
              </a>
            ) : (
              item.label
            )}
          </span>
          {index < items.length - 1 && <span className="mx-2">›</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

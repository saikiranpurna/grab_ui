import React from "react";

interface PrerequisitesProps {
  title?: string;
  description?: string;
  items: string[];
  variant?: "default" | "info" | "warning";
}

const Prerequisites: React.FC<PrerequisitesProps> = ({
  title = "Prerequisites",
  description = "Before installing Grab UI components, make sure you have:",
  items,
  variant = "info",
}) => {
  const variantStyles = {
    default: {
      container: "bg-gray-50 border border-gray-200",
      title: "text-gray-900",
      description: "text-gray-700",
      items: "text-gray-700",
    },
    info: {
      container: "bg-blue-50 border border-blue-200",
      title: "text-blue-900",
      description: "text-blue-800",
      items: "text-blue-800",
    },
    warning: {
      container: "bg-yellow-50 border border-yellow-200",
      title: "text-yellow-900",
      description: "text-yellow-800",
      items: "text-yellow-800",
    },
  };

  const styles = variantStyles[variant];

  return (
    <section className={`${styles.container} p-6 rounded-lg`}>
      <h2 className={`text-xl font-semibold ${styles.title} mb-3`}>{title}</h2>
      <p className={`${styles.description} mb-3`}>{description}</p>
      <ul className={`list-disc list-inside space-y-1 ${styles.items}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Prerequisites;

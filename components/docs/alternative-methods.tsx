import React from "react";

interface MethodStep {
  text: string;
}

interface InstallationMethod {
  title: string;
  description: string;
  steps?: MethodStep[];
  codeExample?: string;
}

interface AlternativeMethodsProps {
  title?: string;
  methods: InstallationMethod[];
}

const AlternativeMethods: React.FC<AlternativeMethodsProps> = ({
  title = "Alternative Installation Methods",
  methods,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>

      <div className="space-y-4">
        {methods.map((method, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{method.title}</h3>
            <p className="text-gray-600 mb-3">{method.description}</p>

            {method.steps && (
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                {method.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step.text}</li>
                ))}
              </ol>
            )}

            {method.codeExample && (
              <div className="bg-gray-900 rounded p-3 mt-3">
                <code className="text-green-400 text-sm">{method.codeExample}</code>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlternativeMethods;

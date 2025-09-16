"use client";
import React from "react";

interface PackageManager {
  name: string;
  command: string;
}

interface CodeBlockProps {
  commands: PackageManager[];
  defaultManager?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ commands, defaultManager = "pnpm" }) => {
  const [activeTab, setActiveTab] = React.useState(defaultManager);
  const [copied, setCopied] = React.useState(false);

  const activeCommand =
    commands.find((cmd) => cmd.name === activeTab)?.command || commands[0].command;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Package Manager Tabs */}
      <div className="mb-4">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
          {commands.map((cmd) => (
            <button
              key={cmd.name}
              onClick={() => setActiveTab(cmd.name)}
              className={`px-3 py-1 text-sm ${
                activeTab === cmd.name ? "bg-white rounded shadow-sm font-medium" : "text-gray-600"
              }`}
            >
              {cmd.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code Block */}
      <div className="relative">
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm">{activeCommand}</code>
        </div>
        <button
          onClick={() => copyToClipboard(activeCommand)}
          className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;

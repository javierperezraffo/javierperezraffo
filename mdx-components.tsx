import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
import { CodeWindow } from "@/components/CodeWindow";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    pre: ({ children }) => <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto mb-4">{children}</pre>,
    code: ({ children }) => <code className="bg-gray-200 p-1 rounded">{children}</code>,
    CodeWindow: CodeWindow,
    ...components,
  };
}

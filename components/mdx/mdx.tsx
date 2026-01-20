import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostLink from "./link";
import PostImage from "./image";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const transformToSlug = (input: string) => {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-")
    .split("&")
    .join("-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

const generateHeading = (headingLevel: number) => {
  return ({ children }: { children: React.ReactNode }) => {
    const textContent = React.Children.toArray(children).join("");
    const slug = transformToSlug(textContent);
    return React.createElement(`h${headingLevel}`, { id: slug }, [
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor-link",
      }),
      textContent,
    ]);
  };
};

const mdxComponents = {
  h1: generateHeading(1),
  h2: generateHeading(2),
  h3: generateHeading(3),
  h4: generateHeading(4),
  Link: PostLink,
  a: PostLink,
  Image: PostImage,
  // Add Table Components
  table: (props: any) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
  ),
  tbody: (props: any) => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900" {...props} />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...props} />
  ),
  th: (props: any) => (
    <th 
      className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300" 
      {...props} 
    />
  ),
};

export function CustomMDX(props: any) {
  const rehypePrettyCodeOptions = {
    theme: "one-dark-pro",
    keepBackground: false,
    onVisitLine(node: any) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node: any) {
      node.properties.className.push("line--highlighted");
    },
    onVisitHighlightedWord(node: any) {
      node.properties.className = ["word--highlighted"];
    },
  };

  return (
    <MDXRemote
      {...props}
      components={{ ...mdxComponents, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
    />
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ReadMoreProps {
  children: React.ReactNode;
  previewHeight?: number;
  className?: string;
  fadeClass?: string;
}

export default function ReadMore({
  children,
  previewHeight = 120,
  className = "",
  fadeClass = "from-white dark:from-gray-800",
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    setContentHeight(el.scrollHeight);
    setIsOverflowing(el.scrollHeight > previewHeight);
  }, [previewHeight]);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => measure()).catch(() => {});
    }
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  useEffect(() => {
    if (!expanded) return;
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [expanded]);

  const maxHeight = expanded ? contentHeight : previewHeight;

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div
        ref={contentRef}
        className="relative overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{ maxHeight }}
      >
        {children}
        {isOverflowing && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${fadeClass} to-transparent transition-opacity duration-500`}
            style={{ opacity: expanded ? 0 : 1 }}
          />
        )}
      </div>
      {isOverflowing && (
        <button
          type="button"
          aria-expanded={expanded}
          tabIndex={expanded ? -1 : 0}
          onClick={() => setExpanded(true)}
          className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-300 transition-opacity duration-300 hover:text-teal-500 dark:hover:text-teal-200 focus:outline-none ${
            expanded ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          Read More
        </button>
      )}
    </div>
  );
}

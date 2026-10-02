"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ProcessAccordionItem = {
  num: string;
  title: string;
  body: ReactNode;
};

export default function ProcessAccordion({
  items,
}: {
  items: ProcessAccordionItem[];
}) {
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateFromScroll = () => {
      const activationY = window.innerHeight / 2;
      let closest = 0;
      let minDist = Infinity;
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - activationY);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex((prev) => (prev === closest ? prev : closest));
    };

    updateFromScroll();
    document.fonts?.ready?.then(updateFromScroll).catch(() => {});
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, []);

  return (
    <div>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <div
            key={item.num}
            className={`border-t border-gray-200 dark:border-gray-800 transition-opacity duration-500 ease-in-out ${
              isActive ? "opacity-100" : "opacity-60"
            }`}
          >
            <button
              type="button"
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              onClick={() => setActiveIndex(i)}
              aria-expanded={isActive}
              className="w-full flex items-baseline gap-4 md:gap-6 py-5 md:py-6 text-left"
            >
              <span
                aria-hidden="true"
                className={`shrink-0 self-center rounded-full transition-all duration-300 ease-in-out ${
                  isActive
                    ? "w-4 h-4 bg-teal-500"
                    : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
              />
              <span
                className={`shrink-0 text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-500 dark:text-gray-500"
                }`}
              >
                {item.num}
              </span>
              <span
                className={`text-lg md:text-xl font-red-hat-display font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`ml-auto h-px flex-1 self-center origin-left transition-transform duration-500 ease-in-out ${
                  isActive
                    ? "bg-teal-500 scale-x-100"
                    : "bg-gray-200 dark:bg-gray-700 scale-x-100"
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-8 md:pb-10 md:pl-12 lg:pl-14 max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-gray-200 dark:border-gray-800" />
    </div>
  );
}

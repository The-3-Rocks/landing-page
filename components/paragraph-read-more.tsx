"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ParagraphReadMoreProps {
  text: string;
  lines?: number;
  expanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

const SUFFIX_HTML =
  '<button type="button" style="font-family:inherit;font-size:0.875em;font-weight:600;line-height:inherit;cursor:pointer">Read More\u2026</button>';

export default function ParagraphReadMore({
  text,
  lines = 4,
  expanded,
  onExpandChange,
}: ParagraphReadMoreProps) {
  const [ready, setReady] = useState(false);
  const [truncated, setTruncated] = useState<string | null>(null);
  const [internalExpanded, setInternalExpanded] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);

  const isExpanded = expanded !== undefined ? expanded : internalExpanded;

  const setExpandedState = useCallback(
    (next: boolean) => {
      if (onExpandChange) {
        onExpandChange(next);
      } else {
        setInternalExpanded(next);
      }
    },
    [onExpandChange]
  );

  const measure = useCallback(() => {
    const p = pRef.current;
    if (!p) return;

    const cs = window.getComputedStyle(p);
    let lineHeight = parseFloat(cs.lineHeight);
    if (!lineHeight || Number.isNaN(lineHeight)) {
      lineHeight = parseFloat(cs.fontSize) * 1.5;
    }
    const maxHeight = lineHeight * lines;
    const words = text.split(" ");

    const clone = document.createElement("p");
    clone.style.position = "absolute";
    clone.style.visibility = "hidden";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    clone.style.width = `${p.offsetWidth}px`;
    clone.style.margin = "0";
    clone.style.padding = "0";
    clone.style.boxSizing = "border-box";
    clone.style.fontFamily = cs.fontFamily;
    clone.style.fontSize = cs.fontSize;
    clone.style.fontWeight = cs.fontWeight;
    clone.style.lineHeight = cs.lineHeight;
    clone.style.letterSpacing = cs.letterSpacing;
    clone.style.wordSpacing = cs.wordSpacing;
    document.body.appendChild(clone);

    clone.innerHTML = text;
    const overflows = clone.scrollHeight > maxHeight;

    let prefix: string | null = null;
    if (overflows) {
      let lo = 1;
      let hi = words.length;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        clone.innerHTML = `${words.slice(0, mid).join(" ")} ${SUFFIX_HTML}`;
        if (clone.scrollHeight <= maxHeight) {
          prefix = words.slice(0, mid).join(" ");
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
    }

    document.body.removeChild(clone);
    setTruncated(overflows ? prefix : null);
    setReady(true);
  }, [lines, text]);

  useEffect(() => {
    measure();
    const onResize = () => {
      if (!isExpanded) measure();
    };
    window.addEventListener("resize", onResize);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => measure()).catch(() => {});
    }
    return () => window.removeEventListener("resize", onResize);
  }, [measure, isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const target = e.target as Node | null;
      if (!target) return;
      const el = target instanceof Element ? target : target.parentElement;
      if (el && el.closest("button, a")) return;
      if (pRef.current && !pRef.current.contains(target)) {
        setExpandedState(false);
        measure();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isExpanded, setExpandedState, measure]);

  useEffect(() => {
    if (!isExpanded) measure();
  }, [isExpanded, measure]);

  const clampStyle: React.CSSProperties | undefined = !ready
    ? {
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }
    : undefined;

  const showFull = !ready || isExpanded || truncated === null;

  return (
    <p ref={pRef}>
      {showFull ? (
        <span style={clampStyle} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <>
          <span dangerouslySetInnerHTML={{ __html: truncated }} />{" "}
          <button
            type="button"
            onClick={() => setExpandedState(true)}
            className="inline cursor-pointer text-teal-600 dark:text-teal-300 hover:text-teal-500 dark:hover:text-teal-200 hover:underline underline-offset-2 focus:outline-none"
            style={{
              fontFamily: "inherit",
              fontSize: "0.875em",
              fontWeight: 600,
              lineHeight: "inherit",
            }}
          >
            Read More…
          </button>
        </>
      )}
    </p>
  );
}

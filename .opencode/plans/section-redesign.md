# Hompage Section Redesign Plan

## Goal
Make all 7 homepage sections visually distinct from each other while keeping the same text styling. Add AOS scroll animations, hover effects, and CSS transitions for a dynamic feel.

## Files to modify (7 components)

### 1. `components/section-why-choose.tsx`
**Current:** 2 side-by-side cards with checkmarks  
**New:** Alternating rows with vertical teal connector line on the left
- Each row: icon badge → title → intro → checklist
- Vertical line (0.5px teal at 20% opacity) connects the rows
- Rows on white card background with 0.5px border
- AOS: `fade-right` / `fade-left` alternating, staggered delays
- Hover: `-translate-y-0.5` + `shadow-md`, icon `scale-110`, checklist items slide `translate-x-0.5`

### 2. `components/section-about.tsx`
**Current:** 2 equal cards + 3 stat blocks  
**New:** Asymmetrical 2/3 + 1/3 layout
- Left card (col-span-2): "Where we operate" — larger, more prominent
- Right card: "Why we were built" — narrower, with checkmarks
- Closing line in teal: "The 3 Rocks was built to solve all three."
- Stats below with hover lift
- AOS: `fade-up` on left, `fade-left` with delay on right

### 3. `components/section-regions.tsx`
**Current:** 4 accent-border cards + callout  
**New:** Numbered teal circle badges on accent cards + full-width callout
- Each region card gets a `w-8 h-8 rounded-full` teal circle with number (1-4)
- Number badge has hover `scale-110` animation
- Bottom callout: improved icon+text layout with hover lift
- AOS: staggered `fade-up` per card

### 4. `components/section-quality.tsx`
**Current:** 2×2 card grid + stat row  
**New:** Horizontal arrow flow — 4 cards with `ArrowRight` connectors
- `grid sm:grid-cols-2 lg:grid-cols-4 gap-0` — cards flush
- `ArrowRight` chevrons between cards (hidden below lg)
- Stat row changed to inline `flex flex-wrap justify-center gap-4`
- AOS: staggered `fade-up`
- Hover: `-translate-y-1` + `shadow-md`, icon `scale-110`

### 5. `components/section-mine-to-port.tsx`
**Current:** 4 bare steps + 3 port cards  
**New:** Vertical timeline — step number in teal box on left, content on right
- Each step: `w-[62px] h-[62px]` teal-background box with step number → title + description
- Vertical teal line connecting all 4 steps on the left
- Port cards: stat-block style with hover lift
- AOS: staggered `fade-up`

### 6. `components/section-industries.tsx`
**Current:** 3×2 uniform card grid  
**New:** Thematic grouping with category headers + accent card
- Top row (3 cards): category label "Industrial & Energy", first card has `2px solid #1d9e75` accent border
- Bottom row (3 cards): category label "Technology & Manufacturing", standard 0.5px border
- `IndustryCard` component extracted for reuse
- AOS: staggered `fade-up`
- Hover: `-translate-y-1` + `shadow-md`

### 7. `components/section-faq.tsx`
**Current:** Static stacked cards, all answers always visible  
**New:** Accordion — click question to expand/collapse answer
- `"use client"` component with `useState` for open/close state
- Click anywhere on question row to toggle
- `ChevronDown` icon rotates 180° when open
- Smooth `max-height` + `opacity` transition on answer container
- Teal accent color on open question text

## What stays unchanged
- section-pill + section-title header pattern with teal highlights
- Text styling: `text-[15px] leading-relaxed text-gray-500 dark:text-gray-400`
- Card borders, dark mode support
- All text content (same copy)
- Teal accent color `#1d9e75`
- Lucide icons in light-teal containers
- Checkmark `&#10003;` in teal for lists

## Build verification
After all edits: `npm run build` — expect 61 pages, 0 errors

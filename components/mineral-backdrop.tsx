"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

import leadImage from "@/public/images/LeadByAchraf.png";
import zincImage from "@/public/images/ZincByAchraf.png";
import copperImage from "@/public/images/CopperByAchraf.png";
import bariteImage from "@/public/images/BariteByAchraf.png";
import ironImage from "@/public/images/IronByAchraf.png";
import cobaltImage from "@/public/images/CobaltByAchraf.png";
import antimonyImage from "@/public/images/AntimonyByAchraf.png";

interface MineralElement {
  src: StaticImageData;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate: number;
  width: string;
  height: string;
  lightOpacity: string;
  darkOpacity: string;
}

const MINERAL_COMPOSITIONS: Record<string, MineralElement[]> = {
  // Hero section - Products page header
  hero: [
    {
      src: leadImage,
      top: "4%",
      left: "5%",
      rotate: -12,
      width: "w-24",
      height: "h-20",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: zincImage,
      top: "6%",
      right: "10%",
      rotate: -8,
      width: "w-24",
      height: "h-20",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: copperImage,
      top: "14%",
      right: "7%",
      rotate: 16,
      width: "w-24",
      height: "h-20",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: bariteImage,
      top: "17%",
      left: "3%",
      rotate: 20,
      width: "hidden sm:block w-24 h-20",
      height: "",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: ironImage,
      top: "24%",
      right: "13%",
      rotate: 10,
      width: "hidden sm:block w-24 h-20",
      height: "",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: antimonyImage,
      top: "30%",
      left: "8%",
      rotate: 8,
      width: "hidden md:block w-24 h-20",
      height: "",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
    {
      src: cobaltImage,
      top: "34%",
      right: "4%",
      rotate: -20,
      width: "w-24",
      height: "h-20",
      lightOpacity: "opacity-50",
      darkOpacity: "dark:opacity-50",
    },
  ],
};

export default function MineralBackdrop({
  preset,
}: {
  preset: keyof typeof MINERAL_COMPOSITIONS;
}) {
  const minerals = MINERAL_COMPOSITIONS[preset] || [];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      {minerals.map((mineral, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: mineral.top,
            left: mineral.left,
            right: mineral.right,
            bottom: mineral.bottom,
          }}
        >
          <div
            className={`${mineral.width} ${mineral.height} ${mineral.lightOpacity} ${mineral.darkOpacity}`}
            style={{ transform: `rotate(${mineral.rotate}deg)` }}
          >
            <Image
              src={mineral.src}
              alt=""
              fill
              sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 96px"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

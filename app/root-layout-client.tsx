"use client";

import { useEffect } from "react";
import Theme from "./theme-provider";
import "aos/dist/aos.css";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        once: true,
        disable: "mobile",
        duration: 600,
        easing: "ease-out-sine",
      });
      AOS.refresh();
    };
    initAOS();
  }, []);

  return <Theme>{children}</Theme>;
}

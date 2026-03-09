"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lenis only on client-side for desktop
const ReactLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  { ssr: false }
);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
 const [shouldEnableSmoothScroll, setShouldEnableSmoothScroll] = useState(false);

  useEffect(() => {
    // Detect low-end devices: mobile, low core count, or low memory
   const isLowEnd =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4);

    // Only enable smooth scroll on high-end desktop devices
   if (!isLowEnd) {
      setShouldEnableSmoothScroll(true);
    }
  }, []);

  // Skip Lenis smooth scroll on low-end/mobile for native performance
  if (!shouldEnableSmoothScroll) {
    return <>{children}</>;
  }

 return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
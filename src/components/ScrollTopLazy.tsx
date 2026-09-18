"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ScrollTopButton = dynamic(
  () =>
    import("@/components/ScrollTopButton").then((mod) => mod.ScrollTopButton),
  { ssr: false, loading: () => null }
);

export function ScrollTopLazy() {
  return (
    <Suspense fallback={null}>
      <ScrollTopButton />
    </Suspense>
  );
}

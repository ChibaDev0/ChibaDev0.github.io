"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false },
);

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <ParticleField />
    </div>
  );
}

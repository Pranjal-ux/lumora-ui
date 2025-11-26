"use client";
import React from "react";
import FloatingLines from "../../../components/FloatingLines";
import Hero from "../../../components/hero";

const Page2Background = () => {
  return (
    <div className="relative  min-h-screen w-full">
      {/* Background fixed to viewport (doesn't vanish, doesn't depend on content height) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 8, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 px-4 sm:px-10 py-16">
        <Hero />
      </main>
    </div>
  );
};

export default Page2Background;

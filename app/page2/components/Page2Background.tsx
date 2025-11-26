"use client";
import React from "react";
// import FloatingLines from "../../../components/FloatingLines";
import Aurora from "../../../components/Aurora";
import Hero from "../../../components/hero";

const Page2Background = () => {
  return (
    <div className="relative  min-h-screen w-full">
      {/* Background fixed to viewport (doesn't vanish, doesn't depend on content height) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
        <Aurora
          colorStops={["#3CB44A", "#006600", "#4B3EFF"]}
          blend={1}
          amplitude={1.0}
          speed={0.5}
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

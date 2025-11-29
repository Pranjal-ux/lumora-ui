"use client";
import React from "react";
import FloatingLine from "../../../components/FloatingLines";
import Hero from "../../../components/hero";

const Home = () => {
  return (
    <div>
      <div className="h-full relative  ">
        <FloatingLine
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="absolute z-30 top-1 right-1 left-1 mb-2  ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;

"use client";
import React from "react";
import FloatingLines from "../../../components/FloatingLines";
const Page2Background = () => {
  return (
    <div className="h-screen w-full relative">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[10, 15, 20]}
        lineDistance={[8, 6, 4]}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
    </div>
  );
};

export default Page2Background;

"use client";
import React from "react";
import Plasma from "../../../components/Plasma";
import Nav from "./Nav";
import Page2Heading from "./Page2Heading";
const Page2Background = () => {
  return (
    <div className="min-h-[100dvh] bg-black w-full relative overflow-hidden">
      {/* Plasma background */}
      <div className="absolute inset-0 sm:mx-10">
        <Plasma
          color="#9b30ff"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Content on top */}
      <div className="relative z-10 px-4 sm:px-10 py-10">
        <Page2Heading />
      </div>
    </div>
  );
};

export default Page2Background;

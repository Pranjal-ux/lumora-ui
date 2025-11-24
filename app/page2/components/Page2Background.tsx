"use client";
import React from "react";
import Plasma from "../../../components/Plasma";
import Nav from "./Nav";
const Page2Background = () => {
  return (
    <div className="min-h-screen bg-black w-full relative">
      <div>
        <Nav />
      </div>
      <Plasma
        color="#9b30ff"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={true}
      />
    </div>
  );
};

export default Page2Background;

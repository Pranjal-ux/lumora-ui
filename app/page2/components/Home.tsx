"use client";
import React from "react";
import Aurora from "../../../components/Aurora";

import Hero from "../../../components/hero";

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" h-full relative bg-black ">
        <Aurora
          colorStops={["#001F7A", "#005EFF", "#00A8FF"]}
          blend={0.5}
          amplitude={1.4}
          speed={0.5}
        />
      </div>
      <div className="absolute   top-1 right-1 left-1 mb-2  ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;

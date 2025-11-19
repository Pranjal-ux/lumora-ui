import React from "react";
import Galaxy from "./Galaxy.jsx";

const Background = () => {
  return (
    <div className="h-screen bg-black relative flex justify-center items-center ">
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.7}
        glowIntensity={0.3}
        saturation={0}
        hueShift={0}
      />
    </div>
  );
};

export default Background;

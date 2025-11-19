import React from "react";
import Galaxy from "./ui/Galaxy.jsx";
//import InputField from "../components/InputField";


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
      {/* <InputField /> */}
    </div>
  );
};

export default Background;

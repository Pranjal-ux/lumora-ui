import React from "react";
import ShinyText from "../../../components/ShinyText";
const Page2Heading = () => {
  return (
    <div className="text-6xl tracking-tight absolute top-[15vw] right-[25vw] ">
      <ShinyText
        text="Upgrade Your Effort to Impact"
        disabled={false}
        speed={3}
        className="custom-class"
      />
    </div>
  );
};

export default Page2Heading;

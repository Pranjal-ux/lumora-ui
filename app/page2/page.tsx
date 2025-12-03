import React from "react";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className=" h-full w-full relative  ">
          <Home />
        </div>
        <div className="h-full     bg-black">
          <Feature />
        </div>
        <div className="bg-blue-800  h-full ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;

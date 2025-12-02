import React from "react";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div className=" h-screen w-full relative  ">
        <Home />
      </div>
      <div className="h-screen  bg-black">
        <Feature />
      </div>
      <div className="bg-blue-800 min-h-screen relative">
        <Footer />
      </div>
    </>
  );
};

export default page;

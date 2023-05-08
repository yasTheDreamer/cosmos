import React from "react";
import ArrowRight from "../atoms/ArrowRight";
import Skills from "../molecules/Skills";
import Cards from "./Cards";

const Content = () => {
  return (
    <div className="relative flex max-mobile:flex-col h-full w-full bg-black -mt-2 z-2 pt-12">
      <div className="flex flex-col w-[40%] max-mobile:w-full">
        <Skills />
        <ArrowRight />
      </div>
      <div className="flex flex-col w-[60%] max-mobile:w-full">
        <Cards />
      </div>
    </div>
  );
};

export default Content;

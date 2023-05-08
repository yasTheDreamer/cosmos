import React from "react";
import Picture from "../atoms/Picture";
import Intro from "./Intro";

const Presentation = () => {
  return (
    <div className="flex max-mobile:flex-col-reverse w-full justify-between max-mobile:items-center">
      <div className="w-1/2 max-mobile:w-full flex flex-column justify-center items-center">
        <Intro />
      </div>
      <div className="flex w-1/2 max-mobile:w-3/4 justify-center items-center">
        <Picture />
      </div>
    </div>
  );
};

export default Presentation;

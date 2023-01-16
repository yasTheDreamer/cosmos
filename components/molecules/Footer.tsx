import React, { useState } from "react";
import Dot from "../atoms/Dot";
import Arrows from "./Arrows";

const Footer = () => {
  const [pages, setPages] = useState([
    {
      id: "first_page",
      color: "bg-white",
    },
    {
      id: "second_page",
      color: "bg-gray-400",
    },
  ]);

  return (
    <div className="flex mt-4">
      <div className="flex justify-between w-8 ml-8">
        {pages.map((page) => {
          return <Dot key={page.id} id={page.id} color={page.color} />;
        })}
      </div>
      <Arrows />
    </div>
  );
};

export default Footer;

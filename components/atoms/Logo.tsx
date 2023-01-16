import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";

const Logo = () => {
  return <Image className="my-6" src={logo} alt="portfolio's logo"></Image>;
};

export default Logo;

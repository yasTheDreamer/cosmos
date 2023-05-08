import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import logo_mobile from "../../images/logo_mobile.svg";
import menu from "../../images/menu.svg";

const Logo = () => {
  return (
    <>
      <Image className="my-6 desktop_logo" src={logo} alt="portfolio's logo" />

      <div className="relative w-full flex">
        <Image
          className="my-6 mobile_logo"
          src={logo_mobile}
          alt="portfolio's logo"
        />
        <Image className="right-10 top-10 absolute menu" src={menu} alt="" />
      </div>
    </>
  );
};

export default Logo;

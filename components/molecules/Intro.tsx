import React, { useState } from "react";
import Image from "next/image";
import linkedin_icon from "../../images/icon-linkedin.svg";
import instagram_icon from "../../images/icon-instagram.svg";
import upwork_icon from "../../images/icon-upwork.svg";
import fiverr_icon from "../../images/icon-fiverr.svg";
import gmail_icon from "../../images/icon-gmail.svg";
import github_icon from "../../images/icon-github.svg";
import Link from "next/link";

const Intro = () => {
  const [icons, setIcons] = useState([
    {
      alt: "instagram",
      icon: instagram_icon,
      link: "https://www.instagram.com/yassine19265/",
    },
    {
      alt: "upwork",
      icon: upwork_icon,
      link: "https://www.upwork.com/freelancers/~013b6751d5ea3ff45c",
    },
    {
      alt: "fiverr",
      icon: fiverr_icon,
      link: "https://www.fiverr.com/yas1995",
    },
    {
      alt: "gmail",
      icon: gmail_icon,
      link: "https://mail.google.com/mail/?view=cm&to=yassine19265@gmail.com",
    },
    {
      alt: "github",
      icon: github_icon,
      link: "https://github.com/yasTheDreamer",
    },
  ]);
  return (
    <div className="pt-14 pl-14">
      <h1 className="text-5xl leading-tight">
        Hi, My name is
        {/* prettier-ignore */}
        <span className="text-white bg-purple-underline bg-contain bg-no-repeat whitespace-pre py-1 pr-5"> Yassine</span>
        <br />
        I'm a Full Stack Developer
      </h1>
      <div className="w-44 h-7"></div>
      <div className="border-t-4 border-t-black w-44 h-5"></div>
      <h1 className="text-2xl">
        i currently work as a Full Stack Engineer <br />
        at Société Générale CIB.
      </h1>
      <div className="flex items-center h-28">
        <Link
          href="https://www.linkedin.com/in/yassine-yousfi-568801ab/"
          target="_blank"
        >
          <Image src={linkedin_icon} alt="linkedin" className="h-6 w-6" />
        </Link>

        {icons.map((icon) => {
          return (
            <Link key={icon.alt} href={icon.link} target="_blank">
              <Image
                src={icon.icon}
                alt={icon.alt}
                className="ml-5 h-6 w-6"
              ></Image>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Intro;

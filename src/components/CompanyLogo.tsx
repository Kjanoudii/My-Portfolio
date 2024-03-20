import React from "react";
import Image from "next/image";
import img from "../assets/images/bakugan.png";
import tailwindcssIcon from "../assets/images/icons8-tailwind-css.svg";
import typescriptIcon from "../assets/images/icons8-typescript.svg";
import htmlIcon from "../assets/images/icons8-html.svg";
import cssIcon from "../assets/images/icons8-css.svg";
import reactIcon from "../assets/images/icons8-react.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function CompanyLogo() {
  return (
    <div className="grid md:grid-cols-5 gap-[20px] ">
      {/* <div className="my-auto text-gray-700 text-3xl font-normal flex ">
        <span className="mr-14">Stack</span> |
      </div> */}

      <div className="mx-auto py-4 my-auto">
        <Image src={htmlIcon} className="w-8" alt="" />
      </div>

      <div className="mx-auto py-4 my-auto">
        <Image src={cssIcon} className="w-10" alt="" />
      </div>

      <div className="mx-auto py-4 my-auto">
        <Image src={typescriptIcon} className="w-9" alt="" />
      </div>

      <div className="mx-auto py-4 my-auto">
        <Image src={reactIcon} className="w-9" alt="" />
      </div>

      <div className="mx-auto py-4 my-auto">
        <Image src={tailwindcssIcon} className="w-9" alt="" />
      </div>
    </div>
  );
}

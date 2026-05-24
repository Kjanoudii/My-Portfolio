import React from "react";
import Image from "next/image";
import tailwindcssIcon from "../assets/images/icons8-tailwind-css.svg";
import typescriptIcon from "../assets/images/icons8-typescript.svg";
import htmlIcon from "../assets/images/icons8-html.svg";
import cssIcon from "../assets/images/icons8-css.svg";
import nextIcon from "../assets/images/icons8-nextjs-96.png";
import { SiDotnet, SiPostgresql } from "react-icons/si";

export default function CompanyLogo() {
  return (
    <div className="flex flex-wrap gap-5 w-full py-2 items-center">
      <div className="my-auto py-4">
        <Image src={htmlIcon} className="w-8" alt="HTML" />
      </div>
      <div className="my-auto py-4">
        <Image src={cssIcon} className="w-9" alt="CSS" />
      </div>
      <div className="my-auto py-4">
        <Image src={typescriptIcon} className="w-8" alt="TypeScript" />
      </div>
      <div className="my-auto py-4">
        <Image src={nextIcon} className="w-9" alt="Next.js" />
      </div>
      <div className="my-auto py-4">
        <Image src={tailwindcssIcon} className="w-8" alt="Tailwind CSS" />
      </div>
      <div className="my-auto py-4">
        <SiDotnet className="w-9 h-9 text-purple-700" title="ASP.NET" />
      </div>
      <div className="my-auto py-4">
        <SiPostgresql className="w-8 h-8 text-blue-700" title="PostgreSQL" />
      </div>
    </div>
  );
}

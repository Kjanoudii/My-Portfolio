"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import img from "../assets/images/GiftingOasis.png";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import upArrow from "../assets/images/icons8-arrow-100.png";
import downArrow from "../assets/images/icons8-down-arrow-100.png";

interface ProjectProps {
  img: string;
  name: string;
  type: string;
  link?: string | undefined;
  description?: string;
}
export default function Project({
  img,
  name,
  type,
  link,
  description,
}: ProjectProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="my-10 mx-5 inline-block w-96 rounded-md max-h-64">
      <div className="group  relative rounded-md transition-all duration-500">
        <Link target="_blank" href={link ? link : "/"}>
          <Image
            src={img}
            width={400}
            height={400}
            style={{ width: "100%", height: "100%" }}
            className="rounded-md c-thin-border"
            alt=""
          />
        </Link>
        <div className="content pt-3">
          <h5 className="mb-1">
            <Link
              href="/portfolio-detail-one"
              className="hover:text-indigo-600 transition-all duration-500 font-semibold"
            >
              {name}
            </Link>
          </h5>
          <h6 className="text-slate-400">{type}</h6>
        </div>

        {clicked && <p className="pt-2">{description}</p>}
        <FontAwesomeIcon
          onClick={() => setClicked(!clicked)}
          className="max-w-3 cursor-pointer block ml-auto mr-0"
          icon={clicked ? faArrowUp : faArrowDown}
        />

        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
      </div>
    </div>
  );
}

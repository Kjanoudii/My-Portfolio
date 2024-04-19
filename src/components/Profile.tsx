import React from "react";
import Image from "next/image";
import myPic from "../assets/images/me-2.jpeg";
import { BsCheckCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FaRegEnvelope } from "react-icons/fa";

import githubIcon from "../assets/images/icons8-github.png";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import CompanyLogo from "./CompanyLogo";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <div
      id="#home"
      className="mt-56 px-52 mx-auto grid lg:grid-cols-12 md:grid-cols-2 
    grid-cols-1 items-center my-10 gap-[15px]"
    >
      <div className="lg:col-span-5">
        <Image
          className="mr-10 ml-auto my-img"
          src={myPic}
          height={0}
          width={400}
          style={{ height: "auto" }}
          alt=""
        />
      </div>
      <div className="lg:col-span-7">
        <div className="lg:ms-5">
          <h3 className="mb-6 md:text-5xl text-3xl md:leading-normal leading-normal font-bold">
            Front-End React <br /> Developer
          </h3>
          <p className="text-slate-500 text-lg max-w-xl">
            Hi, Im Khaled Eljanoudi. A passionate Front-End React <br />
            Developer based in Beirut, Lebanon
            <FontAwesomeIcon
              icon={faMapPin}
              className="inline w-3"
              style={{ color: "#eb0a0a" }}
            />
          </p>

          {/* <ul className="list-none text-slate-400 mt-4 ">
                  <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" />Digital Marketing Solutions for Tomorrow</li>
                  <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" />Our Talented & Experienced Marketing Agency</li>
                  <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2" />Create your own skin to match your brand</li>
                </ul> */}

          <div className="py-5 flex gap-4 max-w-20">
            <Link href="https://github.com/Kjanoudii">
              <FontAwesomeIcon
                size="2xl"
                icon={faSquareGithub}
                className="cursor-pointer"
                style={{ color: "#1f2123" }}
              />
            </Link>

            <Link href="https://www.linkedin.com/in/khaled-janoudi-075987291/">
              <FontAwesomeIcon
                size="2xl"
                icon={faLinkedin}
                className=" cursor-pointer"
                style={{ color: "#1f2123" }}
              />
            </Link>
          </div>

          <section className="max-w-full px-28 mt-10 border-t border-b border-gray-200 dark:border-gray-700">
            <div className=" ">
              <CompanyLogo />
            </div>
          </section>
          <div className="mt-12">
            <a
              href="mailto:janoudikhaled@gmail.com"
              className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2 inline-flex items-center"
            >
              <FaRegEnvelope className="me-2 text-sm " /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

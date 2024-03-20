/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { RiMastercardLine } from "react-icons/ri";
import img from "../assets/images/coffee.jpg";
export default function About() {
  return (
    <div className="max-h-full px-60 relative md:mt-44 ">
      <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[10px]">
        <div className="lg:col-span-5">
          <Image
            className="rounded-md"
            src={img}
            alt=""
            height={380}
            width={380}
          />
        </div>

        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <div className="lg:ms-8">
            <div className="grid md:grid-cols-1 grid-cols-1 md:gap-0 gap-[30px]">
              <div
                className="group  dark:border-gray-700 relative
               shadow dark:shadow-gray-800 rounded-md 
               md:scale-110 z-3 bg-white dark:bg-slate-900"
              >
                <div className="p-6 py-8 ">
                  <h6 className="font-bold uppercase mb-5 text-indigo-600">
                   A dedicated Front-End Developer based in Beirut, Lebanon.
                  </h6>

                  <div className="flex mb-5 text-base text-slate-500 leading-10">
                    Hello! I'm Khaled Eljanoudi, a dedicated web developer
                    specializing in TypeScript, HTML, Tailwind CSS, and Next.js.
                    With a passion for crafting engaging and seamless user
                    experiences, I bring creativity and precision to every
                    project. My journey in web development began with a
                    fascination for interactive design, leading me to specialize
                    in front-end development. I thrive on solving complex
                    challenges, optimizing performance, and staying at the
                    forefront of industry trends. Let's collaborate to bring
                    your digital vision to life!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

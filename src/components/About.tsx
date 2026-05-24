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
    <div className="max-h-full lg:px-60 mx-2 relative md:mt-44 mt-10 ">
      <div className="container grid lg:grid-cols-12 grid-cols-1 items-center gap-[10px]">
        <div className="lg:col-span-6">
          <Image
            className="rounded-md w-full object-cover"
            src={img}
            alt=""
            height={800}
            width={800}
            style={{ minHeight: "480px" }}
          />
        </div>

        <div className="lg:col-span-6 mt-8 lg:mt-0">
          <div className="lg:ms-8">
            <div className="grid md:grid-cols-1 grid-cols-1 md:gap-0 gap-[30px]">
              <div
                className="group  dark:border-gray-700 relative
               shadow dark:shadow-gray-800 rounded-md
               md:scale-110 z-3 bg-white dark:bg-slate-900"
              >
                <div className="p-6 py-8 ">
                  <h6 className="font-bold uppercase mb-5 text-indigo-600">
                    A dedicated Software Developer based in Kuwait.
                  </h6>

                  <div className="flex mb-5 text-base text-slate-500 leading-10">
                    Hello! I'm Khaled Eljanoudi, a full-stack software developer
                    with experience building production-ready web applications
                    from the ground up. I work across the stack — architecting
                    Laravel backends with Filament CMS, crafting responsive
                    frontends with Next.js, React, TypeScript, and Tailwind CSS,
                    and integrating databases like MySQL and MongoDB. I take
                    projects from schema design and API development through to
                    pixel-accurate UI and deployment. I thrive on delivering
                    complete, polished products that are fast, scalable, and easy
                    for clients to manage.
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

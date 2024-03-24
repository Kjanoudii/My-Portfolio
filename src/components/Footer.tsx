"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Icon from "react-feather";




export default function Footer() {
  
  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  Copyright © {new Date().getFullYear()}. All rights are
                  reserved.
                </p>
              </div>

              <div className=" flex gap-4 max-w-10">
                <Link href="https://github.com/Kjanoudii">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faSquareGithub}
                    className="cursor-pointer"
                    style={{ color: "#fffff3" }}
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/khaled-janoudi-075987291/">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faLinkedin}
                    className=" cursor-pointer"
                    style={{ color: "#fffff3" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LuSettings, BsCart3 } from "../assets/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png";
export default function Navbar(props: any) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);

  let [manu, setManu] = useState("");
  let pathname = usePathname();

  useEffect(() => {
    setManu(pathname);

    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    }
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [setManu]);

  const toggleMenu = () => {
    setisMenu(!isMenu);

    const navigationElement = document.getElementById("navigation");
    if (navigationElement) {
      const anchorArray: HTMLAnchorElement[] = Array.from(
        navigationElement.getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (event) => {
          const target = (event.target as HTMLAnchorElement).getAttribute(
            "href"
          );
          if (target !== null && target !== "") {
            const nextSibling = element.nextElementSibling;
            if (nextSibling) {
              const submenu = nextSibling.nextElementSibling as HTMLElement;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    >
      <div className=" " style={{ margin: 0 }}>
        <div>
          <Image className="pl-5" height={100}width={150} src={logo} alt="" />

          <ul className={` ml-36 navigation-menu `} style={{ margin: 0 }}>
            <li>
              <Link href="#home" className="sub-menu-item">
                Home
              </Link>
            </li>

            <li
              className={` ? "active"
                  : ""
              } has-submenu parent-parent-menu-item`}
            >
              <Link href="#about">About</Link>{" "}
            </li>

            <li
              className={`
                  ? "active"
                  : ""
              } has-submenu parent-parent-menu-item `}
            >
              <Link href="#projects">Projects</Link>
            </li>

            <li className={manu === "/contact-one" || "" ? "active" : ""}>
              <Link href="#contact" className="sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

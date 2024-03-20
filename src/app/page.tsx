import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../components/Profile";
import About from "../components/About";
import Footer from "../components/Footer";
import Project from "../components/Project";
import tmt from "../assets/images/tmt.png";
import reactimg from "../assets/images/reactChat.png";
import giftImg from "../assets/images/GiftingOasis.png";
import checklistImg from "../assets/images/check-list.png";
import mapIcon from "../assets/images/icons8-map-64.png";
import mailIcon from "../assets/images/icons8-mail-64.png";
// const Navbar = dynamic(()=>import('../components/NavBar'));

interface ProjectProps {
  key?: number;
  img: string;
  name: string;
  type: string;
  link: string | undefined;
  description: string;
}
export default function Home() {
  const projects: ProjectProps[] = [
    {
      img: tmt.src,
      name: "Toy Market Trading",
      type: "NEXT.JS",
      link: "/",
      description: `"description"`,
    },

    {
      img: reactimg.src,
      name: "Chat Web-App",
      type: "REACT.JS",
      link: "https://chat-web-app15621.netlify.app/",
      description: `"description"`,
    },
    {
      img: giftImg.src,
      name: "Gifting Oasis",
      type: "JS & BOOTSTRAP",
      link: "https://giftoasis.netlify.app/",
      description: `"description"`,
    },

    {
      img: checklistImg.src,
      name: "Checklist",
      type: "REACT.JS",
      link: "https://check-list-app5484.netlify.app/",
      description: `"description"`,
    },
  ];
  return (
    <div className="mx-auto text-gray-800">
      <Profile />

      <div className="mt-56 mb-48 ">
        <div className="text-center mt-16 text-slate-700">
          <div className="line-container inline-block relative">
            <span id="about" className="text-3xl font-bold ">
              ABOUT
            </span>
          </div>
        </div>
        <About />
      </div>
      <div className="text-center my-24 text-slate-700">
        <div className="line-container inline-block relative">
          <span id="projects" className="text-3xl font-bold ">
            PROJECTS
          </span>
        </div>
      </div>
      <section className="my-20 block lg:mx-auto lg:px-60">
        {projects.map((item, index) => {
          return (
            <Project
              key={index}
              img={item.img}
              name={item.name}
              type={item.type}
              link={item.link}
              description={item.description}
            />
          );
        })}
      </section>

      <div className="text-center mt-16 text-slate-700 mb-20">
        <div className="line-container inline-block relative">
          <span id="contact" className="text-3xl font-bold ">
            CONTACT
          </span>
        </div>
      </div>
      <section className=" my-14 ml-56 max-h-full py-6">
        <h6 className="font-bold uppercase mb-5 text-indigo-600">
          Dont hesitate to hit me up 👇
        </h6>

        <div className="flex gap-10 ">
          <div className="flex rounded-md p-3 gap-4 items-center cursor-pointer">
            <Image className="c-thin-border p-2" src={mapIcon} alt="" />
            <div>
              <h4 className="font-semibold text-gray-900">Location</h4>
              <p className=" text-gray-500">Beirut, Lebanon</p>
            </div>
          </div>

          <div className="flex rounded-md p-3 gap-4 items-center cursor-pointer">
            <Image className="c-thin-border p-2" src={mailIcon} alt="" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className=" text-gray-500">janoudikhaled@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer> */}
    </div>
  );
}

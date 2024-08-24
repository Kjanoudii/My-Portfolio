import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../components/Profile";
import About from "../components/About";
import Footer from "../components/Footer";
import Project from "../components/Project";
import tmt from "../assets/images/tmt.png";
import enjaz from "../assets/images/enjaz.png";
import reactimg from "../assets/images/reactChat.png";
import giftImg from "../assets/images/GiftingOasis.png";
import ehcoPost from "../assets/images/echoPost.png";
import aora from "../assets/images/aora.jpg";

import checklistImg from "../assets/images/check-list.png";
import ContactSection from "@/components/ContactSection";

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
      img: ehcoPost.src,
      name: "EchoPost",
      type: "NEXT.JS, TYPESCRIPT, NODEJS & MYSQL",
      link: "https://microblog-app.vercel.app/",
      description: `EchoPost is a robust full-stack web application designed 
  to mimic the core functionalities of social platforms like Twitter/X. 
  The project is divided into two separate repositories: one for the frontend and 
  another for the backend. The frontend leverages Next.js, TypeScript, and 
  TailwindCSS, while the backend is built using ExpressJS, Node.js, and MySQL. 
  Users can register, log in, create posts, and like other users' posts.
   With JWT for authentication, EchoPost ensures secures user sessions and 
   data integrity. This project showcases my ability to develop and manage 
   complex web applications across different stacks, emphasizing frontend, backend and authentication expertise.`,
    },
    {
      img: tmt.src,
      name: "Toy Market Trading",
      type: "NEXT.JS & STRAPI API",
      link: "https://toy-marketing.netlify.app/",
      description: `ToyMarket Trading is a sleek and efficient website that demonstrates the power of Next.js and the versatility of Tailwind CSS. With clean code 
      and simple design, this project showcases my proficiency in web development.
      Through ToyMarket Trading, users experience seamless navigation and responsiveness across devices.
       Leveraging Next.js for the Front-End and Strapi API for the Back-End, while Tailwind CSS enhances its aesthetics with customizable design elements.`,
    },
    {
      img: enjaz.src,
      name: "Enjaz World",
      type: "NEXT, TYPESCRIPT & TAILWINDCSS",
      link: "https://my-enjaz.vercel.app/",
      description: `Enjaz is a purely frontend Web app that showcases my 
      styling abilities in TailwindCSS using Next.js and TypeScript.
       This project demonstrates my proficiency in creating aesthetically 
       pleasing and highly functional web interfaces. With a focus on clean 
       code and responsive design, Enjaz offers users an elegant and seamless
        browsing experience across devices. This project serves as a testament to
         my expertise in modern web development technologies and my ability to
          deliver visually appealing and user-friendly web applications.`,
    },

    {
      img: reactimg.src,
      name: "Chat Web-App",
      type: "REACT.JS & FIREBASE",
      link: "https://chat-web-app15621.netlify.app/",
      description: `ChatApp is a dynamic and interactive
       web application that highlights the capabilities of React.js and firebase 
       in creating engaging user experiences. This project serves as a showcase of
        my expertise in web development using firebase. ChatApp allows users to engage in live chat
         conversations, sending of pictures , recording voice messages, demonstrating real-time updates, cloud storing and instant message delivery. With its sleek design and intuitive user interface, this project 
        exemplifies my ability to create immersive web experiences using React.js.`,
    },
    {
      img: aora.src,
      name: "AORA-MEMES",
      type: "REACT-NATIVE & APPWRITE",
      link: "https://expo.dev/preview/update?message=fix&updateRuntimeVersion=1.0.0&createdAt=2024-06-17T23%3A38%3A52.152Z&slug=exp&projectId=ddf4f5eb-8063-4c5d-a764-59edae19b8ec&group=42d579a0-eee7-4c00-bc23-56b2d360a4c9",
      description: `AORA-MEMES is a React Native Expo application that uses Appwrite as 
      the backend. Users can log in, view short videos and meme videos, and post/create 
      their own short videos. This project demonstrates my ability to develop mobile 
      applications with dynamic content and u ser interactions using modern technologies.
     <br/>
      Note: To view this app, you must install the 
      expo go app on your phone (appstore or googleplay) and scan the preview QR-code.
      `,
    },
    //     {
    //       img: giftImg.src,
    //       name: "Gifting Oasis",
    //       type: "JS & BOOTSTRAP",
    //       link: "https://giftoasis.netlify.app/",
    //       description: `"The Gifting Oasis" epitomizes a modern and user-centric web
    //       application, showcasing the seamless integration of Bootstrap and Vanilla JavaScript. Designed to be a one-stop destination for gift seekers, this project radiates simplicity and elegance through its design and user interface.
    // With its responsive layout and fluid navigation, "The Gifting Oasis" ensures a
    // delightful browsing experience across various devices. Leveraging Bootstrap's
    // robust framework, the website offers a blend of functionality and
    // aesthetics, allowing users to explore a diverse range of gifts across different
    // categories .
    // This project underscores my proficiency in frontend development, highlighting my
    // ability to use Vanilla JavaScript to create dynamic and
    // interactive user experiences.

    // `,
    //     },

    {
      img: checklistImg.src,
      name: "Checklist",
      type: "REACT.JS & FIREBASE",
      link: "https://check-list-app5484.netlify.app/",
      description: `"React Checklist" is a straightforward web application designed for task management. With its intuitive interface and simple design, this project streamlines the process of creating and organizing lists using React.js and Firestore database.
                Users can create new lists and add items to each list, facilitating efficient task tracking and management. 
         Utilizing Firestore database integration, "React Checklist" provides real-time synchronization of data, enabling users to access their lists and items across multiple devices seamlessly. This ensures that users can stay organized and productive, whether they are at home, work, or on the go.
               By showcasing "React Checklist", I aim to highlight my proficiency in leveraging React.js and Firestore to develop web applications. 



`,
    },
  ];
  return (
    <div className="mx-auto text-gray-800 h-full">
      <Profile />
      <div className="mt-56 mb-48 ">
        <div className="text-center mt-16 text-slate-700">
          <div className="lg:line-container inline-block relative">
            <span id="about" className="text-3xl font-bold ">
              ABOUT
            </span>
          </div>
        </div>
        <About />
      </div>
      <div className="text-center my-24 text-slate-700">
        <div className="lg:line-container  inline-block relative">
          <span id="projects" className="text-3xl font-bold ">
            PROJECTS
          </span>
        </div>
      </div>
      <section className="my-20 lg:mx-auto lg:px-60 px-3">
        <div className="lg:flex lg:flex-row justify-center gap-1">
          {projects.slice(0, 3).map((item, index) => {
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
        </div>
        <div className="lg:flex lg:flex-row justify-center gap-2 mt-8">
          {projects.slice(3, 6).map((item, index) => {
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
        </div>
      </section>
      <div className="text-center mt-36 text-slate-700 md:mb-20">
        <div className="lg:line-container inline-block relative">
          <span id="contact" className="text-3xl font-bold ">
            CONTACT
          </span>
        </div>
      </div>
      <ContactSection />
      <Footer />
      {/* <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer> */}
    </div>
  );
}

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
import staffImg from "../assets/images/staff-call-img.png";
import ehcoPost from "../assets/images/echoPost.png";
import portfolio from "../assets/images/portfolio.png";
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
      img: portfolio.src,
      name: "BSK Student Portfolio",
      type: "NEXT.JS, EXPRESS.JS, MONGODB & MINIO",
      link: "https://youtu.be/T6b_vB9KGtQ",
      description: `BSK Student Portfolio is a comprehensive full-stack web application built for The British School of Kuwait, enabling students to showcase their academic experiences, achievements, and extracurricular activities. Built with Next.js, React, and MongoDB, the platform features a robust role-based access control (RBAC) system that manages different user permissions for students, teachers, and administrators. The application implements secure file upload functionality using MinIO for object storage, allowing students to attach documents, images, and media to their portfolio entries. With advanced MongoDB aggregation pipelines for efficient data querying and filtering, JWT-based authentication for secure user sessions, and a responsive design for seamless mobile and desktop experiences, 
      the platform serves as a centralized hub for student achievement tracking. This project demonstrates my expertise in building scalable educational platforms with complex data relationships, secure file management, database optimization, and enterprise-level access control systems. <strong>Note:</strong> This is an internal school system and not publicly accessible.
       Click the project image to watch a demonstration video.`,
    },

    {
      img: staffImg.src,
      name: "Staff Call Dashboard",
      type: "REACT.JS, MATERIAL-UI & TailwindCSS",
      link: "https://luxury-stroopwafel-a358b3.netlify.app/",
      description: `Staff Call Dashboard is a real-time call monitoring and management system built with 
      React.js, featuring live WebSocket connections for instant call updates. The application provides
       staff members with a comprehensive interface to track incoming calls, monitor call duration,
        view caller information, and manage call statuses (answered/missed/ongoing).
         Built with a modern tech stack combining Material-UI components and Tailwind CSS for styling, 
         the dashboard offers an intuitive and responsive user experience across devices. 
                   Key features include dynamic call queue visualization, caller information display with 
          history tracking, call duration timers, and an efficient filtering system for viewing 
          answered versus unanswered calls. The application also includes call analytics and reporting
           capabilities, helping organizations optimize their call handling workflows.
            This project demonstrates my ability to build production-ready real-time applications 
            with complex state management, responsive UI design focused on operational efficiency.`,
    },
    
    {
      img: tmt.src,
      name: "Toy Market Trading",
      type: "NEXT.JS & STRAPI API",
      link: "https://toymarkettrading.com/",
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
      description: `Enjaz is a purely Frontend Web app with no functionality. The project showcases my 
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
      link: "https://www.linkedin.com/posts/khaled-janoudi-075987291_react-reactnative-mobiledevelopment-activity-7208925762593173505-i-2f?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbNM5kBlBMesUPaAGsB7r7tOoSMBRTXUG8",
      description: `AORA-MEMES is a React Native Expo application that uses Appwrite as 
      the backend. Users can log in, view short videos and meme videos, and post/create 
      their own short videos. This project demonstrates my ability to develop mobile 
      applications with dynamic content and u ser interactions using modern technologies.
     
      `,
    },
        {
          img: giftImg.src,
          name: "Gifting Oasis",
          type: "JS & BOOTSTRAP",
          link: "https://giftoasis.netlify.app/",
          description: `"The Gifting Oasis" epitomizes a modern and user-centric web
          application, showcasing the seamless integration of Bootstrap and Vanilla JavaScript. Designed to be a one-stop destination for gift seekers, this project radiates simplicity and elegance through its design and user interface.
    With its responsive layout and fluid navigation, "The Gifting Oasis" ensures a
    delightful browsing experience across various devices. Leveraging Bootstrap's
    robust framework, the website offers a blend of functionality and
    aesthetics, allowing users to explore a diverse range of gifts across different
    categories .
    This project underscores my proficiency in frontend development, highlighting my
    ability to use Vanilla JavaScript to create dynamic and
    interactive user experiences.

    `,
        },

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
        <div className="lg:flex lg:flex-row justify-center gap-3">
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
        <div className="lg:flex lg:flex-row justify-center gap-1 mt-8 px-10">
          {projects.slice(3, 7).map((item, index) => {
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

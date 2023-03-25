import React from "react";
import profile from "../assets/profile_pic.jpg";
import { MdOutlineEmail, MdSmartphone } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiReact, SiTailwindcss, SiUnity } from "react-icons/si";

const Contact = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="border-white border rounded-sm bg-white bg-opacity-10 w-full md:w-1/2">
        <div className="flex m-2 md:m-4 justify-center items-center">
          <div className="w-24 h-24 flex items-center justify-center">
            {/* <img src="@/assets/profile_pic.jpeg" className="w-full" /> */}
            <img
              className="rounded-full border w-full"
              src={profile}
              alt="Profile pic"
            ></img>
          </div>
          <div className="md:ml-6 ml-2 text-left w-60">
            <h1 className="text-xl font-bold mb-2">Nikitesh Singh</h1>
            <p className="text-sm font-light italic mb-1">Software Engineer</p>
            <p className="text-sm font-light mb-1">
              <MdOutlineEmail className="inline" /> :{" "}
              <a href="mailto:admin@nikiteshsingh.com">
                admin@nikiteshsingh.com
              </a>
            </p>
            <p className="text-sm font-light mb-1">
              <MdSmartphone className="inline" /> :{" "}
              <a href="tel:+91990-027-6598">+91990-027-6598</a>
            </p>
            <p className="text-sm font-light mb-1">
              <GrLinkedin className="inline" /> : /nikiteshsingh
            </p>
          </div>
        </div>
        <div className="flex border-t py-1 px-2">
          <section className="text-sm m-1 font-bold">Skills:</section>
          <section className="text-3xl m-1 font-light text-left flex justify-around flex-1">
            <AiFillHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript />
            <SiReact />
            <SiTailwindcss />
            <SiUnity />
            {/* React, Redux, JavaScript, HTML, CSS, API integration, Data handling,
            Performance optimization, Responsive design, Clean code,
            Problem-solving, Analytical skills, Communication, Collaboration,
            Git/Github. */}
            {/* <p>
              Expertise in React and related libraries (Redux, React Router,
              React Native)
            </p>
            <p>
              Proficiency in JavaScript, including modern syntax and core
              concepts
            </p>
            <p>
              Strong understanding of HTML, CSS, and other frontend technologies
            </p>
            <p>Experience with testing and debugging React applications</p>
            <p>Familiarity with API integration and data handling</p>
            <p>Knowledge of web performance optimization techniques</p>
            <p>
              Experience with responsive design and mobile-first development
            </p>
            <p>Ability to write clean, maintainable, and reusable code</p>
            <p>Strong problem-solving and analytical skills</p>
            <p>
              Excellent communication and collaboration skills with other team
              members
            </p>
            <p>
              Experience with version control systems such as Git and Github.
            </p> */}
          </section>
        </div>
        <div className="border-t border-dashed py-1 px-2 text-justify text-sm font-light">
          React, Redux, JavaScript, HTML, CSS, API integration, Data handling,
          Performance optimization, Responsive design, Clean code,
          Problem-solving, Analytical skills, Communication, Collaboration,
          Git/Github.
        </div>
      </div>
    </div>
  );
};

export default Contact;

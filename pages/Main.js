import React from "react";

import {
  BsTwitter,
  BsDribbble,
  BsLinkedin,
  BsFillFileTextFill,
  BsTypeH3,
} from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Link from "next/link";

const MainContent = () => {
  const [darkmode, setDarkmode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`w-full h-full  ${darkmode ? "dark" : ""}`}>
      {/* Container */}
      <div className="pt-20 flex items-center justify-center">
        {/* <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={darkmode}
          onChange={toggleDarkMode}
          size={50}
          sunColor="#FFD700"
          moonColor="lightblue"
        /> */}
      </div>

      <div
        id="container"
        className="max-w-[700px] w-[80%] mx-auto h-full flex flex-col  "
      >
        {/* Intro */}

        <div id="intro" className="">
          <h1 className=" dark:text-[#EEEFF4]   ">
            Hi, I’m Dan an experience and Interface designer, currently learning
            how to {""}
            <span className=" bg-[#B9E1EA] px-2">
              <Link href="/blog" target="_blank">
                make things with code.
              </Link>
            </span>
          </h1>
        </div>

        {/* Experience */}
        <div id="experience" className="pt-[80px]">
          <div id="title" className="flex items-center">
            <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
              <BsFillFileTextFill style={{ transform: "rotate(-4deg)" }} />
            </h1>

            <h2 className="ml-2 dark:text-[#EEEFF4]">Experience</h2>
          </div>
          <p className="ml-2 dark:text-[#EEEFF4] mt-[10px]">
            Over the years, I've worked on some awesome projects with talented
            people.
          </p>
        </div>

        <div id="experience-container" className="pt-8">
          <div
            id="1_experience"
            className="bg-[#FDFEFF] rounded-[18px] p-6 border drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] dark:bg-[#363639] "
          >
            <h3 className="dark:text-[#EEEFF4]">Mimi hearing technologies</h3>
            <p className="dark:text-[#EEEFF4] font-medium">
              Senior product designer · 2020 ➞ 2022
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              At Mimi i worked within a cross functional team on a range of
              products that enable the user to listen to audio based on a
              hearing test.
            </p>
            <br />
            <h3 className="dark:text-[#EEEFF4]">IXDS</h3>
            <p className="dark:text-[#EEEFF4] font-medium">
              Senior UX/UI Designer · 2019 ➞ 2020
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              Worked on multiple projects from concept to launch that required a
              range of skills, from UI/UX design to workshops and producing
              service design documentation. Some of the companies include
              Siemens and Bosch.
            </p>
            <br />
            <h3 className="dark:text-[#EEEFF4]">Noa technologies</h3>
            <p className="dark:text-[#EEEFF4] font-medium">
              UX/UI Designer · 2018 ➞ 2019
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              Contributing to the design of a bike management system. From the
              creation of the UI for mobile app and dekstop.
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div id="projects" className="pt-[80px] ">
          <div id="title" className="flex items-center">
            <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
              <BsFillFileTextFill style={{ transform: "rotate(-4deg)" }} />
            </h1>

            <h2 className="ml-2 dark:text-[#EEEFF4]">Case studies</h2>
          </div>
          <p className=" dark:text-[#E3E5EC] mt-[10px]">
            Some specific case studies taken from projects i have worked on.
          </p>
        </div>

        <div id="caseStudy-container" className="pt-8">
          <Link
            href="https://www.notion.so/Mimi-hearing-technologies-6d284f848ddf40459a19f07f0ea09258"
            target="_blank"
          >
            <div
              id="1_caseStudy"
              className="bg-[#FDFEFF] rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
            >
              <h3 className="dark:text-[#EEEFF4]">
                Improving onboarding experience
              </h3>

              <p className="dark:text-[#CECFD8]">
                A case study on how to improve the onboarding experience from
                wireframes to user testing.
              </p>
              <div className="flex items-center">
                <IconContext.Provider value={{ color: "#5DB2C5" }}>
                  <FaArrowRight />
                  <p className="text-[#5DB2C5] p-1">Read more</p>
                </IconContext.Provider>
              </div>
            </div>
          </Link>
          <div
            id="2_caseStudy"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <h3 className="dark:text-[#EEEFF4]">Workshop discovery</h3>

            <p className="dark:text-[#CECFD8]">
              Management workshop to understand the problem and how it can be
              solved.
            </p>
            <div className="flex items-center">
              <IconContext.Provider value={{ color: "#5DB2C5" }}>
                <p className="text-[#5DB2C5] p-1">Updating soon</p>
              </IconContext.Provider>
            </div>
          </div>
          <div
            id="3_caseStudy"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <h3 className="dark:text-[#EEEFF4]">More in progress..</h3>

            <p className="dark:text-[#CECFD8]">
              Shortly adding some more case studies.
            </p>
          </div>
        </div>

        <IconContext.Provider value={{ color: "#73B0C3" }}>
          <div id="links" className="flex w-full justify-center pt-[80px]">
            <a href="https://twitter.com/__dnth" target="_blank">
              <div className="bg-[#73B0C3] bg-opacity-[0.1] rounded-lg px-2 m-3 w-[120px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto ">
                <BsTwitter />
                <p className="text-[#73B0C3] p-1">Twitter</p>
              </div>
            </a>
            <a href="https://dribbble.com/danth" target="_blank">
              <div className="bg-[#73B0C3] bg-opacity-[0.1] rounded-lg px-2 m-3 w-[120px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto">
                <BsDribbble />
                <p className="text-[#73B0C3] p-1">Dribbble</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/dan01/" target="_blank">
              <div className="bg-[#73B0C3] bg-opacity-[0.1] rounded-lg px-2 m-3 w-[120px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto">
                <BsLinkedin />
                <p className="text-[#73B0C3] p-1">Linkedin</p>
              </div>
            </a>
          </div>
        </IconContext.Provider>

        <div
          id="footer"
          className="flex flex-col w-full items-center justify-center pt-[40px] pb-[40px]"
        >
          <div>
            <p className="dark:text-[#EEEFF4]">Made in Berlin</p>
          </div>
          <div>
            <p className="dark:text-[#EEEFF4]">
              Created with tailwind, nextjs and vercel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

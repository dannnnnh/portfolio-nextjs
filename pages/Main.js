import React from "react";
import Image from "next/image";

import {
  BsTwitter,
  BsDribbble,
  BsLinkedin,
  BsFillFileTextFill,
  BsGithub,
  BsTypeH3,
  BsFillCupHotFill,
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
            Hi, I’m Dan, an experience and Interface designer, currently
            learning how to {""}
            <span className=" bg-[#c4e2e8] px-2">
              <Link href="https://twitter.com/__dnth" target="_blank">
                make things with code.
              </Link>
            </span>
          </h1>
        </div>

        {/* <div
          id="Update"
          className=" mt-[40px] pr-[24px] pl-[24px] pt-2 pb-4 border-2 border-[#62a1b669] rounded-lg border-dashed  dark:bg-[#363639] dark:border-none"
        > */}
          {/* <div className="flex-col items-center mt-2">
            <p className="text-[16px] font-medium">🌳 May 2023</p>
            <p className=" leading-relaxed">
              Almost finished reading 🤖{" "}
              <Link
                href="https://www.goodreads.com/book/show/56620811-the-age-of-ai-and-our-human-future"
                target="_blank"
              >
                <span className="underline-offset-2 underline decoration-2 text-[#4AA3B8] ">
                  Age of AI.
                </span>{" "}
              </Link>
              Also listening to some cool tunes from 🎶{" "}
              <Link
                href="https://www.youtube.com/watch?v=CFQWDukmRSQ"
                target="_blank"
              >
                <span className="underline-offset-2 underline decoration-2 text-[#4AA3B8] ">
                  Gitkin - grand street feast
                </span>{" "}
              </Link>
              and 🎶{" "}
              <Link href="https://youtu.be/7IZOdI2jdKU" target="_blank">
                <span className="underline-offset-2 underline decoration-2 text-[#4AA3B8] ">
                  Nils frahm.
                </span>{" "}
              </Link>
              An article I recently read again 📝{" "}
              <Link href="https://ralphammer.com/make-me-think" target="_blank">
                <span className="underline-offset-2 underline decoration-2 text-[#4AA3B8] ">
                  Make me think - Ralph Ammer
                </span>{" "}
              </Link>
              .
            </p>
          </div> */}
        {/* </div> */}

        {/* Experience */}
        <div id="experience" className="pt-[40px]">
          <div id="title" className="flex items-center">
            <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
              <IconContext.Provider value={{ color: "#4AA3B8" }}>
                <BsFillFileTextFill style={{ transform: "rotate(-10deg)" }} />
              </IconContext.Provider>
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
              Senior product designer · 2020 ➞ 2023
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              At Mimi, I worked within a cross-functional team on a range of
              products that enable users to listen to audio based on their
              hearing test results.
              <b>
                {" "}
                Daily tasks involve conceptual sketching, user testing, creating
                documentation, and exploring ways to bring value to individual
                products for the user.
              </b>
            </p>
            <br />
            <h3 className="dark:text-[#EEEFF4]">IXDS</h3>
            <p className="dark:text-[#EEEFF4] font-medium">
              Senior UX/UI Designer · 2019 ➞ 2020
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              I have worked on multiple projects from concept to launch. These
              projects have required a range of skills,{" "}
              <b>
                including UI/UX design, conducting workshops, and producing
                service design documentation
              </b>
              . Some of the companies I have worked with include Siemens and
              Bosch.
            </p>
            <br />
            <h3 className="dark:text-[#EEEFF4]">Noa technologies</h3>
            <p className="dark:text-[#EEEFF4] font-medium">
              UX/UI Designer · 2018 ➞ 2019
            </p>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              Contribution to the design of a bike management system included
              creating the UI for both mobile and desktop applications. As the
              sole designer, my main tasks involved working{" "}
              <b>
                from initial concepts and wireframing, to user testing,
                prototyping, and finalizing assets.
              </b>
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div id="projects" className="pt-[80px] ">
          <div id="title" className="flex items-center">
            <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
              <IconContext.Provider value={{ color: "#4AA3B8" }}>
                <BsFillFileTextFill style={{ transform: "rotate(-10deg)" }} />
              </IconContext.Provider>
            </h1>

            <h2 className="ml-2 dark:text-[#EEEFF4]">Case studies</h2>
          </div>
          <p className=" dark:text-[#E3E5EC] mt-[10px]">
            Here are some case studies from projects I have worked on.
          </p>
        </div>

        <div id="caseStudy-container" className="pt-8">
          <Link
            //link to the
            target="_blank"
            href="/CaseStudy1"
          >
            <div
              id="1_caseStudy"
              className="bg-[#FDFEFF] rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
            >
              <h3 className="dark:text-[#EEEFF4]">
                Improving onboarding experience
              </h3>

              <p className="dark:text-[#CECFD8]">
                This document presents a case study on how to improve the
                onboarding experience, from wireframes to user testing.
              </p>
              <div className="flex items-center">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <FaArrowRight />
                  <p className="text-[#4AA3B8] p-1">Read more</p>
                </IconContext.Provider>
              </div>
            </div>
          </Link>
          {/* <div
            id="2_caseStudy"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 dark:bg-[#363639] dark:border-none"
          >
            <h3 className="dark:text-[#EEEFF4]">Workshop discovery</h3>

            <p className="dark:text-[#CECFD8]">
              Organizes a management workshop to understand the problem and find
              a solution.
            </p>
            <div className="flex items-center">
              <IconContext.Provider value={{ color: "#4AA3B8" }}>
                <p className="text-[#4AA3B8] p-1">Updating soon</p>
              </IconContext.Provider>
            </div>
          </div> */}
          <div
            id="3_caseStudy"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <h3 className="dark:text-[#EEEFF4]">More in progress..</h3>

            <p className="dark:text-[#CECFD8]">
              We will shortly be adding more case studies.
            </p>
          </div>
        </div>

        {/* Case studies */}
        <div id="projects" className="pt-[80px] ">
          <div id="title" className="flex items-center">
            <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
              <IconContext.Provider value={{ color: "#4AA3B8" }}>
                <BsFillFileTextFill style={{ transform: "rotate(-10deg)" }} />
              </IconContext.Provider>
            </h1>

            <h2 className="ml-2 dark:text-[#EEEFF4]">Other things</h2>
          </div>
          <p className=" dark:text-[#E3E5EC] mt-[10px]">
            Other things i'm spending time doing.
          </p>
        </div>

        <div id="otherThings-container" className="pt-8">
          <div
            id="1_thing"
            className="bg-[#FDFEFF] rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <div></div>
            <Link href="./Booklist" target="_blank">
              <div className="w-[100px] h-[32px] bg-slate-100 rounded-lg flex flex-col mb-[8px]">
                <span className="text-[#4AA3B8] font-medium m-auto">
                  Reading
                </span>
              </div>
              <h3 className="dark:text-[#EEEFF4]">
                Books organised by interests
              </h3>

              <p className="dark:text-[#CECFD8]">
                List of books based on my interests from design to the outdoors.
              </p>

              <div className="flex items-center">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <FaArrowRight />
                  <p className="text-[#4AA3B8] p-1">Check it</p>
                </IconContext.Provider>
              </div>
            </Link>
          </div>

          <div
            id="2_thing"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <Link
              href="https://elfin-sunfish-47b.notion.site/Data-driven-prototypes-75e48a6acc194308bcb27f96b09901dd"
              target="_blank"
            >
              <div className="w-[100px] h-[32px] bg-slate-100 rounded-lg flex flex-col mb-[8px]">
                <span className="text-[#4AA3B8] font-medium m-auto">
                  Learning
                </span>
              </div>
              <h3 className="dark:text-[#EEEFF4]">
                Building data driven prototypes
              </h3>

              <p className="dark:text-[#CECFD8]">
                Over the past few months, I have started learning to code from
                scratch. I have been exploring how to use this knowledge to
                create realistic prototypes.
              </p>

              <div className="flex items-center">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <FaArrowRight />
                  <p className="text-[#4AA3B8] p-1">Link to article</p>
                </IconContext.Provider>
              </div>
            </Link>
          </div>
          <div
            id="3_thing"
            className="bg-[#FDFEFF] mt-4 rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 cursor-pointer dark:bg-[#363639] dark:border-none"
          >
            <Link
              href="https://elfin-sunfish-47b.notion.site/Future-of-the-design-process-b264cd7e34e24224899253239ddd8024"
              target="_blank"
            >
              <div className="w-[100px] h-[32px] bg-slate-100 rounded-lg flex flex-col mb-[8px]">
                <span className="text-[#4AA3B8] font-medium m-auto">
                  Writing
                </span>
              </div>
              <h3 className="dark:text-[#EEEFF4]">
                The future of the design process
              </h3>

              <p className="dark:text-[#CECFD8]">
                How new techniques and tools are changing the way we design.{" "}
              </p>

              <div className="flex items-center">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <FaArrowRight />
                  <p className="text-[#4AA3B8] p-1">Link to article</p>
                </IconContext.Provider>
              </div>
            </Link>
          </div>
        </div>

        <IconContext.Provider value={{ color: "#4AA3B8" }}>
          <div
            id="links"
            className="flex flex-col items-center w-full justify-center pt-[80px] sm:flex-row sm:justify-center"
          >
            <a href="https://twitter.com/__dnth" target="_blank">
              <div className=" bg-opacity-[0.1] rounded-lg px-2 m-3 w-[140px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto ">
                <BsTwitter />
                <p className="text-[#4AA3B8] p-1">Twitter</p>
              </div>
            </a>
            <a href="https://dribbble.com/danth" target="_blank">
              <div className=" bg-opacity-[0.1] rounded-lg px-2 m-3 w-[140px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto">
                <BsDribbble />
                <p className="text-[#4AA3B8] p-1">Dribbble</p>
              </div>
            </a>
            <a href="https://github.com/dannnnnh" target="_blank">
              <div className=" bg-opacity-[0.1] rounded-lg px-2 m-3 w-[140px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto">
                <div>
                  <BsGithub />
                </div>
                <p className="text-[#4AA3B8] p-1 ">Github</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/dan01/" target="_blank">
              <div className=" bg-opacity-[0.1] rounded-lg px-2 m-3 w-[140px] h-12 inline-flex items-center justify-center align-middle transition ease-in-out hover:bg-opacity-[0.2] pointer-events-auto">
                <BsLinkedin />
                <p className="text-[#4AA3B8] p-1">Linkedin</p>
              </div>
            </a>
          </div>
        </IconContext.Provider>

        <div
          id="footer"
          className="flex flex-col w-full items-center justify-center pt-[40px] pb-[40px]"
        >
          <div>
            <p className="dark:text-[#EEEFF4] text-center text-[#72706D]">
              Created with tailwind, nextjs and vercel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

import React from "react";
import Image from "next/image";

import {
  BsTwitter,
  BsDribbble,
  BsLinkedin,
  BsFillFileTextFill,
  BsGithub,
  BsTypeH3,
  BsFillTreeFill,
  BsFillPencilFill,
  BsCollectionFill,
} from "react-icons/bs";

import { FaSeedling } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Link from "next/link";

const Booklist = () => {
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
            Interests
            {/* <span className=" bg-[#c4e2e8] px-2">
            <Link href="https://twitter.com/__dnth" target="_blank">
              make things with code.
            </Link>
          </span> */}
          </h1>
        </div>

        {/* Experience */}
        <div id="experience" className="pt-[28px]">
          <p className="ml-2 dark:text-[#EEEFF4] mt-[10px]">
            An index of things in detail of things that inspire me.
          </p>
        </div>

        <div id="experience-container" className="pt-8">
          <div
            id="1_experience"
            className="bg-[#FDFEFF] rounded-[18px] p-6 border drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] dark:bg-[#363639] "
          >
            <div id="title" className="flex items-center">
              <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <BsCollectionFill />
                </IconContext.Provider>
              </h1>

              <h3 className="ml-2 dark:text-[#EEEFF4]">Designing for Impact</h3>
            </div>

            <p className="dark:text-[#CECFD8] mt-[8px]">
              A continuous motivation that has been with me throughout my career
              is how design can positively affect people's lives.
            </p>

            <p className="dark:text-[#EEEFF4] font-medium pt-4">Books</p>
            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things"
                target="_blank"
              >
                Everyday things - Don norman
              </Link>
            </p>
            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/13179689-good-strategy-bad-strategy"
                target="_blank"
              >
                Good strategy bad strategy - Richard Rumelt, Sean Runnette
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/50776459-shape-up"
                target="_blank"
              >
                Shape up - Ryan Singer
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/55610573-seeing-with-fresh-eyes"
                target="_blank"
              >
                Edward tufte - seeing with fresh eyes
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/52897423-health-design-thinking"
                target="_blank"
              >
                Health design thinking - Bon Ku, Ellen Lupton
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/55345571-demand-side-sales-101"
                target="_blank"
              >
                Demand side sales 101 - Bob Moesta
              </Link>
            </p>
          </div>

          <div
            id="1_experience"
            className="bg-[#FDFEFF] rounded-[18px] p-6 mt-6 border drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] dark:bg-[#363639] "
          >
            <div id="title" className="flex items-center">
              <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <BsFillTreeFill />
                </IconContext.Provider>
              </h1>

              <h3 className="ml-2 dark:text-[#EEEFF4]">
                Hiking, trail running and the outdoors
              </h3>
            </div>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              Whenever possible, I enjoy spending time outdoors hiking and trail
              running. Taking time off is the best way for me to refresh my mind
              and gain new perspectives on things.
            </p>
            <p className="dark:text-[#EEEFF4] pt-4 font-medium">Books</p>
            <ul>
              <p className="text-[#4AA3B8] ">
                <Link
                  href="https://www.goodreads.com/book/show/325485.Finding_Your_Way_Without_Map_or_Compass"
                  target="_blank"
                >
                  Finding Your Way Without Map or Compass - Harold Gatty
                </Link>
              </p>

              <p className="text-[#4AA3B8] ">
                <Link
                  href="https://www.goodreads.com/book/show/57598967-the-heartbeat-of-trees"
                  target="_blank"
                >
                  The heartbeat of trees - Peter Wohlleben
                </Link>
              </p>

              <p className="text-[#4AA3B8] ">
                <Link
                  href="https://www.goodreads.com/book/show/6289283-born-to-run"
                  target="_blank"
                >
                  Born to run - Christopher McDougall
                </Link>
              </p>
            </ul>
          </div>

          <div
            id="1_experience"
            className="bg-[#FDFEFF] rounded-[18px] p-6 mt-6 border drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] dark:bg-[#363639] "
          >
            <div id="title" className="flex items-center">
              <h1 className="ml-1 dark:text-[#EEEFF4] text-[24px]">
                <IconContext.Provider value={{ color: "#4AA3B8" }}>
                  <FaSeedling />
                </IconContext.Provider>
              </h1>

              <h3 className="ml-2 dark:text-[#EEEFF4]">Gardening and nature</h3>
            </div>
            <p className="dark:text-[#CECFD8] mt-[8px]">
              I am interested in exploring ways to create a more sustainable
              future. Currently, I am learning about permaculture and its
              potential to develop sustainable food systems.
            </p>
            <p className="dark:text-[#EEEFF4] pt-4 font-medium">Books</p>
            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/52668915-entangled-life"
                target="_blank"
              >
                Entangled Life - Merlin Sheldrake
              </Link>
            </p>
            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/976905.The_One_Straw_Revolution"
                target="_blank"
              >
                One straw revolution - Masanobu Fukuoka
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/381989.Permaculture"
                target="_blank"
              >
                permaculture - David Holmgren
              </Link>
            </p>

            <p className="text-[#4AA3B8]">
              <Link
                href="https://www.goodreads.com/book/show/56015023-this-is-your-mind-on-plants"
                target="_blank"
              >
                This Is Your Mind On Plants - Michael Pollan
              </Link>
            </p>
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

export default Booklist;

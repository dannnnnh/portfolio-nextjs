import React from "react";
import Zoom from "next-image-zoom";
import Image from "next/image";

import {
  BsTwitter,
  BsDribbble,
  BsLinkedin,
  BsArrowLeftSquare,
  BsTypeH2,
} from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import researchImage from "pages/components/images/caseStudies/researchUI.jpeg";
import userFlowDiagram from "pages/components/images/caseStudies/userFlowDiagram.png";
import appPrototype from "pages/components/images/caseStudies/appPrototype.png";
import designProcess from "pages/components/images/caseStudies/designProcess.png";
import finalUI from "pages/components/images/caseStudies/finalUI.png";
import researchUI from "pages/components/images/caseStudies/researchUI.jpeg";
import resultsFeedback from "pages/components/images/caseStudies/resultsFeedback.jpeg";
import userFeedback from "pages/components/images/caseStudies/userFeedback.jpeg";
import userFlowUI from "pages/components/images/caseStudies/userFlowUI.png";
import userJourney from "pages/components/images/caseStudies/userJourney.jpeg";
import wireFrames from "pages/components/images/caseStudies/wireFrames.png";
import wireFramesTwo from "pages/components/images/caseStudies/wireFramesTwo.png";

function CaseStudyMH() {
  return (
    <div className={`w-full h-full bg-white`}>
      <div
        id="container"
        className="max-w-[600px] w-[80%] mx-auto h-full flex flex-col p-4 mt-2   "
      >
        <IconContext.Provider value={{ color: "#73B0C3" }}>
          <div className="bg-[#73B0C3] bg-opacity-[0.1] rounded-lg p-2 mt-4 w-[100px] h-12 inline-flex items-center justify-center align-middle hover:bg-opacity-[0.2] pointer-events-auto ">
            <FaArrowLeft />
            <a href="/">
              <p className="text-[#73B0C3] p-1">Back</p>
            </a>
          </div>
        </IconContext.Provider>

        <div id="title" className="">
          <h1 className=" leading-10 mt-[48px] dark:text-[#EEEFF4]  ">
            Mimi hearing technologies
          </h1>

          <p className=" leading-10 font-inter mt-[8px] dark:text-[#EEEFF4]  ">
            Improving existing onboarding process for the television.
          </p>
        </div>

        <div id="content" className="mt-[32px]  ">
          <ul className="list-disc leading-8 pl-4">
            <a href="#company">
              {" "}
              <li className="text-[#73B0C3]">The company role and process</li>
            </a>
            <a href="#challenge">
              <li className="text-[#73B0C3]">The challenge</li>
            </a>
            <a href="#discovery">
              <li className="text-[#73B0C3]">Discovery & observation</li>
            </a>
            <a href="#ideation">
              <li className="text-[#73B0C3]">Ideation & prototyping</li>
            </a>
            <a href="#userStudy">
              <li className="text-[#73B0C3]">User study and feedback</li>
            </a>
            <a href="#takeaways">
              <li className="text-[#73B0C3]">Learnings and takeaways</li>
            </a>
          </ul>
          <h2
            id="company"
            className=" leading-10 font-inter mt-8 mb-2 dark:text-[#EEEFF4]"
          >
            The company, role and process
          </h2>
          <p>
            Mimi allows users to 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              adapt the sound of a device based on how they hear
            </span>
            . This is made possible by taking a 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              certified hearing test using a hearing test app on the phone.
            </span>
          </p>
          <br />
          <p>
            Sound frequencies are manipulated using algorithms to create a
            personalized hearing profile. This can be especially beneficial for
            people with mid to moderate hearing deficiencies.
          </p>
          <h3 className="mt-4 mb-2">
            What was my role and tasks within the company?
          </h3>
          <p>
            I joined Mimi as a Senior Product Designer in 2020 and worked within
            a cross-functional team comprising 1 product manager, 3 android
            developers and QA. Our team was primarily focused on applications
            for the TV that enabled the users to adjust the sound based on the
            hearing test results, some of the general tasks included:
          </p>
          <ul className="list-disc leading-8 pl-4 mt-4">
            <li>
              <span className="text-[#67686c] bg-[#B9E1EA]">
                Aligning with stakeholders and communicating with teams.
              </span>
            </li>
            <li>
              <span className="text-[#67686c] bg-[#B9E1EA]">
                Help define the problem 
              </span>
              with the product manager and align with stakeholders.
            </li>
            <li>
              <span className="text-[#67686c] bg-[#B9E1EA]">
                Collect, cluster and access existing research and feedback{" "}
              </span>{" "}
              within the design team.
            </li>
            <li>
              Wireframe, prototype and user test an initial solution alongside
              the user researcher.
            </li>
            <li>
              <span className="text-[#67686c] bg-[#B9E1EA]">
                Workshop with developers to make considerations{" "}
              </span>
              concerning technical constraints.
            </li>
          </ul>
          <h3 className="mt-4 mb-2">The design process</h3>
          <p>
            I followed the human-centred design process developed by IDEO. Tasks
            were broken down and organised within 2-week sprints with daily
            standups for 3 quarters.
          </p>
          <br />
          <div className="">
            <Zoom src={userFlowDiagram} />
          </div>
          <br />
          <blockquote>
            <i>
              “It is about them and for them. The closer the end-users’ needs
              are analyzed and answered, the more successful the adoption or
              purchase of a solution. You iterate until you get it right from a
              customer perspective. This the power of HCD.”
            </i>
          </blockquote>
          <p>Olivier Delarue, UNHCR</p>
          <h3 className=" leading-10 font-regular mt-6 dark:text-[#EEEFF4] ">
            Discovery & observation
          </h3>
          <p>
            In this stage, I work with the product manager and developers to
            collect information and 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              observe how people interact 
            </span>
            with the product. Here we 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              identify patterns and pain points
            </span>
             to help clearly 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              define the problem
            </span>
             and create a hypothesis we can align on as a team.
          </p>
          <br />
          <p>
            Some of the tools that I would typically use to support the process:
          </p>
          <ul className="list-disc leading-8 pl-4">
            <li>Competitor analysis</li>
            <li>Finding existing pain points based on user journeys</li>
            <li>Interviews</li>
            <li>Reviewing quantitative data.</li>
          </ul>
          <h3 className=" leading-10 font-regular mt-6 dark:text-[#EEEFF4] ">
            Ideation and prototyping
          </h3>
          <p>
            In this phase, we must know what problem we are solving and any
            constraints. Here I facilitate a
            <span className="text-[#67686c] bg-[#B9E1EA]">
               co-creation workshop with stakeholders.
            </span>{" "}
            We first capture 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              all possible limitations
            </span>{" "}
            and then sketch some initial ideas. With that as a base, I can
            iterate and move to more detailed wireframes until I have something
            I’m confident with. This part can also involve small-scale 
            <span className="text-[#67686c] bg-[#B9E1EA]">testing</span> to
            inform more minor decisions.
          </p>
          <h3 className=" leading-10 font-regular mt-6 dark:text-[#EEEFF4] ">
            User test and feedback{" "}
          </h3>
          <p>
            Here I conduct user testing to gather feedback. This involves a
            low-fi paper prototype or something more refined to include aspects
            of the existing UI. Depending on the situation, this could happen
            online or in-house. With feedback collected, I host another workshop
            where people can vote on areas they think are most important.
          </p>
          <p>
            Information is collected and prioritised based on impact and
            feasibility. This is then used to inform decisions for any further
            iterations.
          </p>

          <h3 className=" leading-10 font-regular mt-6 dark:text-[#EEEFF4] ">
            Iterations
          </h3>
          <p>
            Here I can iterate based on all the information collected from user
            feedback. This could involve making major or minor changes to the UI
            or steps within the flow. Within this stage, I review the copy with
            a copywriter and check that the content aligns with the marketing
            strategy. Further tasks involve updating stakeholders with progress
            so they know the latest version.
          </p>

          <h3 className=" leading-10 font-regular mt-6 dark:text-[#EEEFF4] ">
            Implementation
          </h3>
          <p>
            In some cases, the components within our design system require an
            update. To retain consistency within the brand, interactions and
            accessibility, part of the time would be dedicated to reviewing the
            latest application build. In this stage, I support developers by
            providing all assets needed and communicating animation specs
            wherever applicable.
          </p>

          <h2
            id="challenge"
            className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  "
          >
            The Challange
          </h2>
          <p>
            Our target audience consisted mainly of people of a 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              wide age range with low to mid-level hearing difficulties.
            </span>
          </p>
          <p>
            The biggest challenge in this project was ensuring I could guide our
            users through onboarding promptly and effectively while reducing
            complexity wherever possible.
          </p>

          <h3 className="mt-2 mb-2">Competitor analysis</h3>
          <p>
            Although difficult to find a similar case to a hearing test on the
            TV, it helped to check existing onboarding patterns for navigation,
            Copy, layout and use of progress components.
          </p>
          <br />
          <div className="">
            <Zoom src={researchImage} />
          </div>

          <h2
            id="discovery"
            className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  "
          >
            Observation & discovery
          </h2>
          <p>
            We received consistent feedback directly from our partners that
            aligned with topics we had also noticed whilst conducting user
            tests. The top frustrations became clear through clustering all the
            pain points. This information would then be presented to the team
            and any stakeholders.
          </p>

          <br />
          <div className="">
            <Zoom src={userFeedback} />
          </div>
          <br />

          <h3 className="mt-2 mb-2">What did we find out?</h3>
          <ul className="list-disc leading-8 pl-4">
            <li>The onboarding process took too long.</li>
            <li>It was too complicated, especially for older generations.</li>
            <li>
              At the end of the flow, it wasn’t clear that our value proposition
              was fulfilled.
            </li>
          </ul>
<br />
          <p className="mt-2">User journey</p>

          <div className="">
            <Zoom src={userJourney} />
          </div>
          <br />
        

          <p className="mt-2">User flow for the TV app</p>
          <div className="">
            <Zoom src={userFlowUI} />
          </div>
          <br />

          <h3 className="mt-2 mb-2">Landing screen</h3>
          <p>
            We didn’t have many problems concerning this screen, we had some
            excellent feedback for the copy, and the user was intrigued with the
            value proposition.
          </p>

          <h3 className="mt-2 mb-2">Sending hearing ID to the TV screen</h3>
          <p>
            The user found it difficult to switch between multiple devices and
            still keep track of exactly where they were in the process.
          </p>

          <h3 className="mt-2 mb-2">Hearing test on the phone</h3>
          <p>
            The test was understood here, but finding the modal containing the
            send QR code option wasn’t easy to find. With the additional step,
            the user realised the time to get set up.
          </p>

          <h3 className="mt-2 mb-2">Home screen</h3>
          <p>
            The user could understand the functions within the screen, but they
            were still missing some feedback that supported the value
            proposition.
          </p>

          <h2 className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  ">
            Our hypothesis
          </h2>

          <p>
            Straightforward 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              navigation, removing unnecessary steps and integrating a test on
              the TV
            </span>{" "}
            would allow people to get set up more efficiently and quickly.
          </p>
<br />
          <p>
            This hypothesis could then be validated through multiple moderated
            user tests, getting feedback from our partners and data (After the
            tracking feature had been implemented) to see if most users can
            successfully make it through the onboarding steps.
          </p>

          <h3 className="mt-2">1. Multiple user tests</h3>
          <p>
            We conducted moderated user tests, showing the users a realistic
            prototype with our chosen flow. Participants were from the 18 - 70
            age range and had never heard of Mimi before.
          </p>

          <h3 className="mt-2">2. Getting feedback from our partners</h3>
          <p>
            We also included our partners’ feedback in our product development
            process. We had an open communication channel with them where we
            would routinely hear constructive feedback and use it to inform
            decisions.
          </p>

          <h3>3. Eventual data</h3>
          <p>
            Mix panel analytics tool was something which we were setting up at
            this time. However, once the implementation was complete, we wanted
            to analyse the onboarding flow, seeing where users dropped off and
            how this affected our X metric.
          </p>

          <h2
            id="ideation"
            className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  "
          >
            Ideation and prototyping{" "}
          </h2>
          <p>
            It was essential to know any limitations before starting the
            ideation process. These were expressed by the stakeholders and
            discussed within the team:
          </p>

          <p>
            Mimi is built using an 
            <span className="text-[#67686c] bg-[#B9E1EA]">SDK framework</span>,
            and integrations worked with a 
            <span className="text-[#67686c] bg-[#B9E1EA]">modular system</span>,
            meaning that features needed to work the same way regardless of the
            platform.
          </p>
          <br />

          <p>
            The hearing test app was 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              health certified
            </span>
            , whereas the Mimi TV app wasn’t. It was, therefore, essential to
            differentiate with wording and visuals and 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              stay within the health guidelines.
            </span>
          </p>
          <br />
          <p>Our primary focus points during the ideation process were:</p>
          <ul className="list-disc leading-8 pl-4">
            <li>
              Removing any redundant steps and combining information where
              possible.
            </li>
            <li>Integrating the  hearing test within the TV app.</li>
          </ul>

          <br />
          <div className="">
            <Zoom src={userFlowDiagram} />
          </div>
          <br />

          <p>
            I experimented with various design patterns and wording to see what
            would work optimally for the hearing test experience. The user
            needed to respond accurately to sound to provide a reliable result.
          </p>
          <br />
          <p>
            We conducted 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              moderated user tests
            </span>{" "}
            with 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              10 participants
            </span>{" "}
            from 
            <span className="text-[#67686c] bg-[#B9E1EA]">
              18 to 70 years old{" "}
            </span>{" "}
            based within English-speaking countries with mid to low hearing loss
            levels who did not know about Mimi.
          </p>
          <br />

          <p>
            For the first iteration, I created a low-fidelity flow that followed
            a typical UX pattern for the TV, with the right panel for the
            actions and the left for the information.
          </p>

          <p>
            <br />
           First version: A layout with instructions on the left side
            of the screen and actions on the right side
          </p>

          <br />
          <div className="">
            <Zoom src={wireFrames} />
          </div>
          <br />

          <h3 className="mt-2 mb-2">What did users find challenging? </h3>
          <ul className="list-disc leading-8 pl-4">
            <li>
              There were two call-to-action buttons. When one was selected, it
              became highlighted, and the user expected to move to another
              screen or something to change visually.
            </li>

            <li>
              The pattern I used to enable the completion of the hearing test
              was not very clear. While answering onboarding questions, the
              states of the buttons were unclear to users, and they weren’t sure
              what would happen next.
            </li>
          </ul>
          <h3 className="mt-2 mb-2">What did users find compelling?</h3>
          <p>
            Users were satisfied with seeing the result of the hearing test.
          </p>
          <br />
          <h3>Second iteration </h3>
          <p>
            A layout with instructions and a single CTA in the centre of the
            screen.
          </p>

          <p>
            The second version addressed the feedback we initially got by
            focusing on the sound and button interaction.
          </p>
          <br />
          <div className="">
            <Zoom src={wireFramesTwo} />
          </div>
          <br />

          <h3 className="mt-2 mb-2">What did users find challenging?</h3>
          <ul className="list-disc leading-8 pl-4">
            <li>
              Some users found the sound from the hearing test unpleasant (High
              pitch tones).
            </li>
            <li>
              Half of the users focused on perfecting the response, although
              this wasn’t necessary as the results are calculated from an
              average.
            </li>
          </ul>

          <h3 className="mt-2 mb-2">What did users find compelling?</h3>
          <p>
            The call to action in the middle of the screen allowed users to
            focus on the most essential task. It offered clarity, and there
            wasn’t any confusion regarding the instructions for the hearing
            test.
          </p>
          <br />
          <p>
            The progress was shown through a percentage in the top right corner,
            providing users with enough context as to where they were in the
            onboarding flow.
          </p>
          <h2
            id="userStudy"
            className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  "
          >
            User Study
          </h2>
          <p>
            Seeing the results from the low-fidelity flow, I went on to test the
            second version with a larger audience. I conducted a user test on
            the user feel platform with 15 people aged 18 to 70.
          </p>
          <br />
          <p>
            The goal was to see if the new format, with the CTA and instruction
            aligned in the centre, was more accessible for the user to
            understand. We needed to validate that the majority of users could
            get through the test to the results screen with ease.
          </p>
          <br />
          <div className="">
            <Zoom src={appPrototype} />
          </div>
          <br />
          <h3 className="mt-2 mb-2">What were the results?</h3>
          <ul className="list-disc leading-8 pl-4">
            <li>
              We found that most people understood the flow  and could navigate
              through the onboarding to get their hearing test results.
            </li>
            <li>
              Some participants needed to redo the practice round because the
              interaction within the first round wasn’t 100% clear to them.
            </li>
            <li>
              The option to hear the difference in the sound on the results
              screen was a  nice feedback loop and provided some reward.
            </li>
            <li>
              Some users found the sound slightly unpleasant and annoying,
              although they understood how it worked.
            </li>
            <li>
              Some users thought the test length was too long. They wanted
              something a lot shorter without a practice round.
            </li>
          </ul>
          <br />
          <div className="">
            <Zoom src={resultsFeedback} />
          </div>
          <br />
          <p className="mt-2 mb-2">
            As a conclusion to the results, we found the following:
          </p>
          <ul className="list-disc leading-8 pl-4">
            <li>
              Users could get through the test to the home screen 100% of the
              time.
            </li>
            <li>The flow wasn’t creating any unnecessary stress.</li>
            <li>
              Most users could recognise the product’s value when viewing the
              results screen.
            </li>
          </ul>
          <br />
          <div className="">
            <Zoom src={finalUI} />
          </div>
          <br />

          <h2
            id="takeaways"
            className=" leading-10 font-inter mt-8 mb-4 dark:text-[#EEEFF4]  "
          >
            Project takeaways
          </h2>
          <h3 className="mt-2 mb-2">Always question assumptions</h3>
          <p>
            I was surprised to see one solution that didn’t necessarily follow a
            typical UX pattern work better than one that did. To find the best
            solution, it’s essential to have an open mind and listen to the user
            and other people within your team. We only caught this early through
            a quick iterative process with small user tests in between.
          </p>

          <h3 className="mt-2 mb-2">
            Keep the focus on the actual problem and zoom out from the details
          </h3>
          <p>
            Because of technical limitations, we were getting stuck on more
            minor details. It was beneficial to do user testing at different
            points of the process to help us realign the problem and prioritise
            what was most important.
          </p>

          <h3 className="mt-2 mb-2">Good communication is key</h3>
          <p className="mb-14">
            Organising, sharing, and making information as transparent as
            possible in a remote setting was important. This project was
            particularly complex, with collaboration required from multiple
            teams. Using Miro and confluence, people could check and respond to
            updates when they had time available, and meetings were organised
            for more complex topics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyMH;

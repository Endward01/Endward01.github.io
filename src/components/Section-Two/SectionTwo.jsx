import "../../App.css";
import Skill from "./Skill";
import { AiOutlineLink } from "react-icons/ai";
import udamy from "../../docs/Java_Certificate.pdf";
import HTMLCSSCERT from "../../docs/HTMLCSS_Certificate.pdf";
import JSCERT from "../../docs/JavascriptAndReact_Certificate.pdf";

const SectionTwo = () => {
  return (
    <section className="section  container mx-auto px-4  space-y-4 ">
      <div>
        <h3 className="text-5xl pb-4 font-bold">About Me</h3>
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-600 xl:w-1/2">
          Organized person, problem solver, great team player with attention to
          detail. Fan of video games, light/science fiction novels, comics,
          science fiction films.
        </p>
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-600">
          I'm interested in Front-End and Back-End spectrum.
        </p>
      </div>
      <div className=" md:w-[100%] mx-auto ">
        <div className=" text-center lg:text-left py-10 flex flex-col justify-center h-full space-y-12 lg:row-span-2 lg:col-span-2">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-center mb-4">
              CERTIFICATES
            </h3>
            <div className=" space-y-6 md:space-y-0 flex flex-wrap justify-center xl:justify-start md:gap-12">
              <div className="w-full xl:w-auto space-y-3 bg-[#fff7e9] p-4  rounded-lg ">
                <h4 className="text-2xl font-bold text-gray-600 relative flex flex-col items-center md:flex-row justify-center md:justify-between">
                  JavaScript & React - Future Collars{" "}
                  <a
                    href={JSCERT}
                    className=" active:text-[#f68989] md:hover:text-[#f68989] md:hover:ease-in-out duration-200 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </h4>

                <p className="text-gray-600">(09/2022 - 12/2022)</p>
                <ol className="space-y-2 text-gray-600 ">
                  <li>
                    - JavaScript ES Next, asynchrony, communication with the
                    backend, debugging methods, destructuring, scope.
                  </li>
                  <li>
                    - React 18.x, Functional and class components, props, state,
                    routing (SPA), Hooks.
                  </li>
                  <li>
                    - Best coding practices, teamwork strategies, task planning,
                    task duration estimation.
                  </li>
                </ol>
              </div>
              <div className="w-full xl:w-auto space-y-3 bg-[#fff7e9] p-4 rounded-lg ">
                <h4 className="text-2xl font-bold text-gray-600 relative flex flex-col items-center md:flex-row justify-center md:justify-between ">
                  HTML/CSS - Future Collars{" "}
                  <a
                    href={HTMLCSSCERT}
                    className=" active:text-[#f68989] md:hover:text-[#f68989] md:hover:ease-in-out duration-200 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="ml-2" />
                  </a>
                </h4>
                <p className="text-gray-600">(08/2022 - 09/2022)</p>
                <ol className="space-y-2 text-gray-600">
                  <li>- HTML 5.x</li>
                  <li>- CSS3</li>
                  <li>- CSS animation basics</li>
                  <li>- RWD (Fluid layout, @media, mobile-first)</li>
                  <li>- BEM</li>
                </ol>
              </div>
              <div className="w-full xl:w-auto space-y-3 bg-[#fff7e9] p-4 rounded-lg ">
                <h4 className="text-2xl font-bold text-gray-600 relative flex flex-col items-center md:flex-row justify-center md:justify-between">
                  Java od Podstaw do Eksperta - Udemy{" "}
                  <a
                    href={udamy}
                    className=" active:text-[#f68989] md:hover:text-[#f68989] md:hover:ease-in-out duration-200 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </h4>
                <p className="text-gray-600">(12/2022)</p>
                <ol className="space-y-2 text-gray-600">
                  <li>- Basics of Java.</li>
                  <li>
                    - Mecha​​​nisms of the OOP programing: classes, interfaces,
                    inheritance, polymorphism, etc.
                  </li>
                  <li>- Write, compile and run basic Java applications.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left font-medium shadow-tertiary h-full flex flex-col justify-center items-center gap-y-2 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6">
          <h3 className="text-3xl font-bold col-span-2 text-center mb-4">
            Skills
          </h3>
          {/* <Skill name={"HTML 5.x"} color={"#c5431f"} description={""} />
          <Skill
            name={"CSS3"}
            color={"#2244ce"}
            description={
              "Experience in creating websites using CSS with BEM and RWD. Ability to use Bootstrap, Tailwind CSS and SCSS."
            }
          /> */}
          <div className="col-span-2 pb-2 w-full text-center">
            <div className="flex flex-col ">
              <div className="flex text-2xl justify-center">
                <p className=" text-[#c5431f]">HTML 5.x</p>
                <p className="text-[#131927]">/</p>
                <p className=" text-[#2244ce]">CSS3</p>
              </div>
              <p className="text-sm text-gray-600 md:pl-6 pt-2">
                Knowledge of the use of HTML and CSS in creating responsive
                websites using BEM and RWD. Also the use of tools such as
                Bootstrap, Tailwind CSS, SASS.
              </p>
            </div>
          </div>
          <Skill
            name={"JavaScript"}
            color={"#d8c519"}
            description={
              "Knowledge of using javascript in front-end and back-end website development, and also knowledge of NodeJS framework and Rest API"
            }
          />
          <Skill
            name={"TypeScript"}
            color={"#1677b8"}
            description={"Basic skills of using TypeScript in development."}
          />
          <Skill
            name={"React 18.x"}
            color={"#79d3f1"}
            description={
              "Skills in creating websites in React using functional and class components, props, states, routing(SPA) and hooks."
            }
          />
          <Skill
            name={"jQuery"}
            color={"#131927"}
            description={
              "Skills in using this library for practical scripting for websites."
            }
          />
          <div className=" col-span-2 ml-2 h-[2px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center"></div>
          {/* <Skill
            className="col-span-2"
            name={"Java"}
            color={"#f5961b"}
            description={
              " Basic knowledge of programming in Java using the Swing Toolkit."
            }
          /> */}
          <div className="col-span-2 pb-2 w-full text-center">
            <div className="flex flex-col ">
              <p className="text-2xl text-[#f5961b]">Java</p>
              <p className="text-sm text-gray-600 md:pl-6 pt-2">
                Basic knowledge of programming in Java using the Swing Toolkit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

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
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-600 lg:w-1/2">
          Organaized preson, problem solver, great team player with attention to
          detail. Fan of Video Games, light/science fiction novels, Comics,
          sci-fi moves.
        </p>
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-600">
          I'm interested in Front-End and Back-End spectrum.
        </p>
      </div>
      <div className=" md:w-[80%] mx-auto ">
        <div className=" text-center lg:text-left py-10 flex flex-col justify-center h-full space-y-12 lg:row-span-2 lg:col-span-2">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold text-center mb-4">
              CERTIFICATES
            </h3>
            <div className=" space-y-6 md:space-y-0 flex flex-wrap justify-center md:justify-start md:gap-12">
              <div className="w-full md:w-auto space-y-3 bg-[#fff7e9] p-4  rounded-lg ">
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
              <div className="w-full md:w-auto space-y-3 bg-[#fff7e9] p-4 rounded-lg ">
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
              <div className="w-full md:w-auto space-y-3 bg-[#fff7e9] p-4 rounded-lg ">
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
                    - Mecha?????????nisms of the OOP programing: classes, interfaces,
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
          <Skill
            name={"HTML"}
            percent={"80%"}
            color={"#c5431f"}
            level={"Extensive"}
          />
          <Skill
            name={"CSS"}
            percent={"75%"}
            color={"#2244ce"}
            level={"Extensive"}
          />
          <Skill
            name={"JavaScript"}
            percent={"65%"}
            color={"#d8c519"}
            level={"Working"}
          />
          <Skill
            name={"TypeScript"}
            percent={"20%"}
            color={"#1677b8"}
            level={"Basic"}
          />
          <Skill
            name={"jQuery"}
            percent={"30%"}
            color={"#131927"}
            level={"Working"}
          />
          <Skill
            name={"ReactJS"}
            percent={"65%"}
            color={"#79d3f1"}
            level={"Working"}
          />
          <Skill
            name={"Bootstrap"}
            percent={"45%"}
            color={"#7810f6"}
            level={"Working"}
          />
          <Skill
            name={"TailwindCSS"}
            percent={"60%"}
            color={"#38bdf8"}
            level={"Extensive"}
          />
          <Skill
            name={"SCSS"}
            percent={"25%"}
            color={"#cf649a"}
            level={"Basic"}
          />
          <Skill
            name={"Java"}
            percent={"15%"}
            color={"#f5961b"}
            level={"Basic"}
          />
          <Skill
            name={"Swing"}
            percent={"10%"}
            color={"#f80102"}
            level={"Basic"}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

export const SectionTwo = () => {
  return (
    <section className="container mx-auto my-4 px-4 py-12 space-y-4">
      <div>
        <h3 className="text-5xl pb-4 font-bold">About Me</h3>
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-400 lg:w-1/2">
          Organaized preson, problem solver, great team player with attention to
          detail. Fan of Video Games, light/science fiction novels, Comics,
          sci-fi moves.
        </p>
        <p className="text-md text-justify lg:text-left py-2 leading-8 text-gray-400">
          I'm interested in Front-End and Back-End spectrum.
        </p>
      </div>
      <div className=" grid gap-6 items-center lg:grid-rows-2 lg:grid-cols-3 lg:gap-4 ">
        <div className="text-center py-10  h-full lg:row-span-2 lg:col-span-2"></div>
        <div className="text-left  font-medium shadow-tertiary shadow-lg p-10 space-y-4  rounded-xl  h-full flex flex-col justify-center items-start">
          <p className="pb-2 w-full text-lg">
            HTML
            <div className="h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
              <div className="h-[6px] w-[80%] bg-[#c5431f] rounded-xl shadow-[#e44d25] shadow"></div>
            </div>
          </p>
          <p className="pb-2 w-full text-lg">
            CSS
            <div className="h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
              <div className="h-[6px] w-[60%] bg-[#2244ce] rounded-xl shadow-[#264de4] shadow"></div>
            </div>
          </p>
          <p className="pb-2 w-full text-lg">
            JavaScript
            <div className="h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
              <div className="h-[6px] w-[45%] bg-[#d8c519] rounded-xl shadow-[#f7e01d] shadow"></div>
            </div>
          </p>
          <p className="pb-2 w-full text-lg">
            TypeScript
            <div className="h-[4px] w-full bg-gray-500/40 mt-3 rounded-xl flex items-center">
              <div className="h-[6px] w-[10%] bg-[#1677b8] rounded-xl shadow-[#007acc] shadow"></div>
            </div>
          </p>
        </div>
        <div className="text-center  lg:text-left shadow-tertiary shadow-lg p-10  rounded-xl h-full flex flex-col justify-center items-start">
          <h4 className="py-4 text-[#7e57c2] leading-6">
            Below is a list of libraries and frameworks that I have worked with.
          </h4>
          <h4 className="py-2">JS</h4>
          <p className="text-gray-400 py-1">- jQuery</p>
          <p className="text-gray-400 py-1">- ReactJS</p>
          <h4 className="py-2">CSS</h4>
          <p className="text-gray-400 py-1">- Bootstrap</p>
          <p className="text-gray-400 py-1">- TailwindCSS</p>
          <p className="text-gray-400 py-1">- SCSS</p>
        </div>
      </div>
    </section>
  );
};

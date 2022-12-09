import Carusel from "./Carusel";

const SectionThree = () => {
  return (
    <section className="section container mx-auto px-4 space-y-14">
      <div>
        <h3 className="text-5xl pb-4 font-bold"> Portfolio</h3>
        <p className="text-md text-justify md:text-left py-2 leading-8 text-gray-600 md:w-1/2">
          A small gallery of my work. It's not all here, if you wish to see all
          my work I encourage you to visit my{" "}
          <span className="text-[#EB1D36] font-medium">
            <a
              href="https://github.com/Endward01"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </span>{" "}
          page.
        </p>
      </div>
      <Carusel />
      <h4 className=" text-center text-2xl pb-4 font-bold">Below is a list of simple Landing Pages created using HTML and CSS</h4>
      <div className="h-1/3 md:h-1/5 mx-auto md:w-[80%] rounded-xl space-y-6 py-4 px-8 bg-[#FFF7E9] flex flex-col justify-center">
        <div className=" md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left h-1/2 md:h-[unset]">
            <h3 className="text-2xl font-bold">Landing Page 1</h3>
            {/* <p className=" text-base py-2 leading-8 text-gray-400">
              {" "}
              Landing Page.
            </p> */}
          </div>
          <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
            <a
              href="https://iridescent-paletas-70823a.netlify.app/"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
            <a
              href="https://github.com/Endward01/Landing-Page-1"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className=" md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left h-1/2 md:h-[unset]">
            <h3 className="text-2xl font-bold">Landing Page 2</h3>
            {/* <p className=" text-base py-2 leading-8 text-gray-400">
              {" "}
              Landing Page.
            </p> */}
          </div>
          <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
            <a
              href="https://whimsical-starlight-085be0.netlify.app/"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
            <a
              href="https://github.com/Endward01/Landing-Page-2"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className=" md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left h-1/2 md:h-[unset]">
            <h3 className="text-2xl font-bold">Landing Page 3</h3>
            {/* <p className=" text-base py-2 leading-8 text-gray-400">
              {" "}
              Landing Page.
            </p> */}
          </div>
          <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
            <a
              href="https://symphonious-lily-007f01.netlify.app/"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
            <a
              href="https://github.com/Endward01/Landing-Page-3-tailwindcss"
              className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionThree;

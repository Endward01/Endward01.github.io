import { Splide, SplideSlide } from "@splidejs/react-splide";
import slide_1 from "../../img/1.png";
import slide_2 from "../../img/2.png";
import slide_3 from "../../img/3.png";
import "@splidejs/splide/css";
const Carusel = () => {
  return (
    <Splide
      className="mx-auto"
      aria-label="My Favorite Images"
      options={{
        rewind: true,
        gap: "3rem",
        // direction: "ttb",
        height: "720px",
        width: "80%",
        breakpoints: {
          768: {
            height: "80vh",
            width: "100%",
          },
        },
      }}
    >
      <SplideSlide>
        <div className=" w-full h-full rounded-xl bg-tertiary">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_1})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 shadow-tertiary shadow-lg  md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Expenses Calculator</h3>
              <p className=" text-base py-2 leading-8 text-gray-400 ">
                {" "}
                A simple income and expenses calculator.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://clever-halva-7045fd.netlify.app/"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/JS-Projekt-1-Domowy-Budzet"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" w-full h-full rounded-xl bg-tertiary">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_2})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 shadow-tertiary shadow-lg md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Currency Converter</h3>
              <p className=" text-base py-2 leading-8 text-gray-400">
                {" "}
                Currency converter made by using free API.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://kaleidoscopic-fox-d4926d.netlify.app"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/JS-Projekt-2-Przelicznik-Walut"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" w-full h-full rounded-xl bg-tertiary">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_3})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 shadow-tertiary shadow-lg md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Sudoku Solver</h3>
              <p className=" text-base py-2 leading-8 text-gray-400">
                {" "}
                A simple app for solving sudoku puzzles.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://glistening-longma-546e12.netlify.app"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/Sudoku-Solver-WithAPI"
                className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-tertiary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carusel;

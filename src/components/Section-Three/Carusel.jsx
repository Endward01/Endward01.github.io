import { Splide, SplideSlide } from "@splidejs/react-splide";
import slide_1 from "../../img/1.png";
import slide_2 from "../../img/2.png";
import slide_3 from "../../img/3.png";
import slide_4 from "../../img/4.png";
import "@splidejs/splide/css";
const Carusel = () => {
  return (
    <Splide
      className="mx-auto"
      aria-label="My Favorite Images"
      options={{
        rewind: true,
        gap: "3rem",
        height: "90vh",
        width: "100%",
        breakpoints: {
          976: {
            height: "80vh",
            width: "100%",
          },
        },
      }}
    >
      <SplideSlide>
        <div className=" w-full h-full rounded-xl bg-[#FFF7E9] border-[4px] border-solid border-[#FFF7E9] ">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_1})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Expenses Calculator</h3>
              <p className=" text-base py-2 leading-8 text-gray-600 ">
                {" "}
                A simple income and expenses calculator.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://clever-halva-7045fd.netlify.app/"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/JS-Projekt-1-Domowy-Budzet"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
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
        <div className=" w-full h-full rounded-xl bg-[#FFF7E9] border-[4px] border-solid border-[#FFF7E9]">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_2})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8  md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Currency Converter</h3>
              <p className=" text-base py-2 leading-8 text-gray-600">
                {" "}
                Currency converter made by using free API.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://kaleidoscopic-fox-d4926d.netlify.app"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/JS-Projekt-2-Przelicznik-Walut"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
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
        <div className=" w-full h-full rounded-xl bg-[#FFF7E9] border-[4px] border-solid border-[#FFF7E9]">
          <div
            className="rounded-xl bg-cover bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_3})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Sudoku Solver</h3>
              <p className=" text-base py-2 leading-8 text-gray-600">
                {" "}
                A simple app for solving sudoku puzzles.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://glistening-longma-546e12.netlify.app"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/Sudoku-Solver"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
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
        <div className=" w-full h-full rounded-xl bg-[#FFF7E9] border-[4px] border-solid border-[#FFF7E9]">
          <div
            className="rounded-xl bg-cover md:bg-center h-2/3 md:h-4/5"
            style={{ backgroundImage: `url(${slide_4})` }}
          ></div>
          <div className="h-1/3 md:h-1/5 py-4 px-8 md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left h-1/2 md:h-[unset]">
              <h3 className="text-2xl pb-4 font-bold">Calculator</h3>
              <p className=" text-base py-2 leading-8 text-gray-600">
                {" "}
                Calculator created using reactJs library.
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-center items-center h-1/2  md:h-[unset]">
              <a
                href="https://poetic-crumble-dffc02.netlify.app/"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
              <a
                href="https://github.com/Endward01/calculator-with-reactjs"
                className="ease-in-out duration-100 btn font-bold px-8 py-3 rounded"
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

import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from "../../img/my_photo_nobg.png";
import bg from "../../img/bg_foto.jpg";

const FrontPage = () => {
  return (
    <div className="text-center p-10">
      <h2 className="text-5xl py-2 font-bold text-[#19282F]">Daniel Pretki</h2>
      <h3 className="text-2xl py-2">Front-End Developer</h3>
      <p className="text-md  py-5 leading-8 text-gray-600 mx-auto md:w-1/2">
        I'm Front-End Developer located in Poznan, Poland. I have passion for
        programming, simplistic and minimalistic UI design and visual effects.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 ">
        <a
          href="https://github.com/Endward01"
          className=" active:text-[#f68989] md:hover:text-[#f68989] md:hover:ease-in-out duration-200"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-pretki/"
          className="active:text-[#f68989] md:hover:text-[#f68989] md:hover:ease-in-out duration-200"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="mx-auto scale-[.9] relative w-72 md:w-96">
        <div className=" grid items-end rounded-[0_0_100vw_100vw] overflow-hidden">
          <img
            src={photo}
            className="relative z-[2] max-w-full block"
            alt="my_photo"
          />
          <img
            src={bg}
            className=" absolute max-w-full block top-auto inset-x-0 bottom-0 aspect-square rounded-full bg-cover w-full m-auto"
            alt="photo_background"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

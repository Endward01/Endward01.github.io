import resume from "../../resume/resume.pdf";
export const Navbar = () => {
  return (
    <nav className="py-5 md:mb-12 flex justify-between">
      <h1 className="text-xl py-2 font-bold">Web Developer</h1>

      <a
        href={resume}
        className="  text-white font-medium px-8 py-3 rounded-md transition-all duration-[50ms]
         md:duration-500 bg-gradient-to-r from-secondary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100
        "
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </nav>
  );
};

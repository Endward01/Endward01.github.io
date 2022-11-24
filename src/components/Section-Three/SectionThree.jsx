import Carusel from "./Carusel";
export const SectionThree = () => {
  return (
    <section className="container mx-auto px-4 py-12 space-y-14">
      <div>
        <h3 className="text-5xl pb-4 font-bold"> Portfolio</h3>
        <p className="text-md text-justify md:text-left py-2 leading-8 text-gray-400 md:w-1/2">
          A small gallery of my work. It's not all here, if you wish to see all
          my work I encourage you to visit my{" "}
          <span className="text-[#7e57c2]">github</span> page.
        </p>
      </div>
      <Carusel />
    </section>
  );
};

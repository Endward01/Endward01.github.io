import  FrontPage  from "./FrontPage";
import  Navbar  from "./Navbar";

const SectionOne = () => {
  return (
    <section className="min-h-screen h-screen container mx-auto px-4 pb-2">
      <Navbar />
      <FrontPage />
    </section>
  );
};

export default SectionOne


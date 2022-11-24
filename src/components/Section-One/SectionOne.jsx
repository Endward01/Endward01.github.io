import { FrontPage } from "./FrontPage";
import { Navbar } from "./Navbar";

export const SectionOne = () => {
  return (
    <section className="min-h-screen h-screen container mx-auto px-4 pb-2">
      <Navbar />
      <FrontPage />
    </section>
  );
};

import ContactForm from "./ContactForm";
import Footer from "./Footer";

const SectionFour = () => {
  return (
    <section className="container mx-auto my-4 px-4 pt-12 space-y-14">
      <div>
        <h3 className="text-5xl pb-4 font-bold"> Contact</h3>
        <p className="text-md text-justify md:text-left py-2 leading-8 text-gray-400 md:w-1/2">
          I'm interested in every opportunity which can help me improve myself.
          However, if you have other question or request, don't hesitate to sand
          me a message.
        </p>
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default SectionFour


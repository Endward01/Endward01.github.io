const ContactForm = () => {
  return (
    <div className="mx-auto w-full space-y-4 grid  grid-cols-1 md:grid-rows-2 md:space-y-0 md:grid-cols-2 gap-4 lg:w-2/3 mb-8">
      <input
        className="bg-secondary  text-center md:text-left shadow-tertiary shadow-lg  rounded-xl focus:outline-none focus:bg-tertiary pl-4 h-12"
        placeholder="Name"
        type="text"
        name="name"
        id="name"
        autoComplete="off"
      />
      <input
        className="bg-secondary   text-center md:text-left shadow-tertiary shadow-lg  rounded-xl focus:outline-none focus:bg-tertiary pl-4 h-12"
        placeholder="Email"
        type="email"
        name="email"
        id="email"
        autoComplete="off"
      />
      <input
        className="bg-secondary   text-center md:text-left shadow-tertiary shadow-lg  rounded-xl focus:outline-none focus:bg-tertiary pl-4 md:col-span-2 h-12"
        placeholder="Subject"
        type="text"
        name="subject"
        id="subject"
        autoComplete="off"
      />
      <textarea
        className="bg-secondary   text-center md:text-left shadow-tertiary shadow-lg  rounded-xl focus:outline-none focus:bg-tertiary pl-4 pt-4 h-52 md:col-span-2"
        placeholder="Message"
        type="text"
        name="body"
        id="message"
        autoComplete="off"
      ></textarea>
      <button
        type="button"
        className="text-white px-8 py-6 rounded-md transition-all duration-[50ms] md:duration-500 bg-gradient-to-r from-secondary via-primary to-[#7e57c2] bg-size-200 bg-pos-0 active:bg-pos-100 md:hover:bg-pos-100 md:col-start-2 mt-10"
      >
        Send Message!
      </button>
    </div>
  );
};
export default ContactForm;

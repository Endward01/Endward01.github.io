import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ruiw4s",
        "template_100q7wv",
        form.current,
        "RVh9tHoMRLpsPUy9E"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto w-full space-y-4 grid  grid-cols-1 md:grid-rows-2 md:space-y-0 md:grid-cols-2 gap-4 lg:w-2/3 mb-8"
    >
      <input
        className="bg-[#FFF7E9]  text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9]  pl-4 h-12"
        placeholder="Name"
        type="text"
        name="from_name"
        autoComplete="off"
      />
      <input
        className="bg-[#FFF7E9]   text-center md:text-left rounded-xl focus:outline-none focus:bg-[#ddd6c9] pl-4 h-12"
        placeholder="Email"
        type="email"
        name="from_email"
        autoComplete="off"
      />
      <input
        className="bg-[#FFF7E9]   text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9] pl-4 md:col-span-2 h-12"
        placeholder="Subject"
        type="text"
        name="subject"
        autoComplete="off"
      />
      <textarea
        className="bg-[#FFF7E9]   text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9] pl-4 pt-4 h-52 md:col-span-2"
        placeholder="Message"
        type="text"
        name="user_message"
        autoComplete="off"
      ></textarea>
      <input
        type="submit"
        value="Send Message!"
        className="ease-in-out duration-100 font-bold px-8 py-6 rounded-md btn md:col-start-2 mt-10 cursor-pointer"
      ></input>
    </form>
  );
};

export default ContactForm;

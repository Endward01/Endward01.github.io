import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../../App.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      form_name: "",
      form_email: "",
      subject: "",
      user_message: "",
    },
  });

  const form = useRef();

  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledColor, setIsDisabledColor] = useState();
  const [isSend, setIsSend] = useState("Send Message!");
  const [isEmpty, setIsEmpty] = useState();

  const resetSendBtn = () => {
    setIsDisabled(true);
    setIsSend("Thanks! For sending me a message!");
    setIsEmpty();
    setIsDisabledColor({
      backgroundColor: "#808080",
      color: "white",
      cursor: "not-allowed",
      boxShadow: "none",
      transform: "none",
    });
    setTimeout(() => {
      setIsDisabled(false);
      setIsDisabledColor({
        backgroundColor: "#f68989",
        color: "black",
        cursor: "pointer",
        boxShadow:
          "0px 5px 0px 0px #bb6464, 2px 0px 0px 0px #bb6464,2px 5px 0px 0px #bb6464",
        transform: "translate(0px, 5px)",
      });

      setIsSend("Send Message!");
    }, 15000);
  };

  const onSubmit = (data) => {
    resetSendBtn();
    sendEmail(data);
  };
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_3ruiw4s",
        "template_100q7wv",
        form.current,
        "RVh9tHoMRLpsPUy9E"
      )
      .then(
        () => {
          // resetSendBtn();
          setIsEmpty();
          // alert("Message has been send :)" + result.text);
        },
        () => {
          setIsSend("Ups... Something went wrong :(");
          // alert("Something went wrong :(" + error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full space-y-4 grid  grid-cols-1 md:grid-rows-2 md:space-y-0 md:grid-cols-2 gap-4 xl:w-2/3 mb-8 "
    >
      <div className="grid col-span-2 grid-rows-1 grid-cols-2 rounded-xl bg-[#ddd6c9] md:col-span-1 ">
        <label htmlFor="Name" className="m-2 font-bold">
          Name
        </label>
        <p className="text-right m-2 font-bold text-[#ce2029]">
          {errors.form_name?.message}
        </p>
        <input
          className="bg-[#FFF7E9]  text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9]  pl-4 h-12 col-span-2"
          name="form_name"
          autoComplete="off"
          type="text"
          // placeholder="Name"
          value={isEmpty}
          {...register("form_name", {
            required: "Field is required",
            min: 3,
            maxLength: {
              value: 25,
              message: "Name is to long",
            },
          })}
        />
      </div>

      <div className="grid col-span-2 grid-rows-1  grid-cols-2 rounded-xl bg-[#ddd6c9] md:col-span-1">
        <label htmlFor="Name" className="m-2 font-bold">
          Email
        </label>
        <p className="text-right m-2 font-bold text-[#ce2029]">
          {errors.form_email?.message}
        </p>
        <input
          className="bg-[#FFF7E9]  text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9]  pl-4 h-12 col-span-2"
          name="form_email"
          type="email"
          // placeholder="Email"
          value={isEmpty}
          {...register("form_email", {
            required: "Field is required",
            pattern: {
              value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/,
              message: "Please provide valid Email",
            },
          })}
        />
      </div>

      <div className="grid grid-rows-1 grid-cols-2 rounded-xl bg-[#ddd6c9] col-span-2">
        <label htmlFor="Name" className=" m-2 font-bold">
          Subject
        </label>
        <p className="text-right m-2 font-bold text-[#ce2029]">
          {errors.subject?.message}
        </p>
        <input
          className="bg-[#FFF7E9]  text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9]  pl-4 h-12 col-span-2"
          name="subject"
          type="text"
          // placeholder="Subject"
          value={isEmpty}
          {...register("subject", {
            required: "Field is required",
            min: 3,
            maxLength: {
              value: 50,
              message: "Subject is to long",
            }
          })}
        />
      </div>

      <div className="grid grid-rows-1 grid-cols-2 col-span-2 md:col-span-2 rounded-xl bg-[#ddd6c9]">
        <label htmlFor="Name" className=" m-2 font-bold">
          Message
        </label>
        <p className="text-right m-2 font-bold text-[#ce2029]">
          {errors.user_message?.message}
        </p>
        <textarea
          className="bg-[#FFF7E9]   text-center md:text-left  rounded-xl focus:outline-none focus:bg-[#ddd6c9] pl-4 pt-4 h-52 col-span-2"
          name="user_message"
          type="text"
          // placeholder="Message"
          value={isEmpty}
          {...register("user_message", { required: "Field is required" })}
        />
      </div>

      <input
        className="ease-in-out duration-100 font-bold px-8 py-6 col-span-2 rounded-md btn md:col-start-2 mt-10 cursor-pointer w-full"
        style={isDisabledColor}
        type="submit"
        value={isSend}
        disabled={isDisabled}
      />
    </form>
  );
};

export default ContactForm;

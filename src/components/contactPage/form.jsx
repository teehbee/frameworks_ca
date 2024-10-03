import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  message: yup.string().min(3, "Message must be at least 3 characters").required("Message is required"),
});

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setIsSubmitted(true);
  }

  const id = React.useId();

  return (
    <div className="container text-center py-5 mt-5">
      <h1 className="fs-1-25-to-2rem">Contact us, we would love to hear from you!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form d-flex flex-column mx-auto py-3 py-md-5 text-start">
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-fullName"}>
          Full name<span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="text" name="fullName" placeholder="Enter your full name here" {...register("fullName")} id={id + "-fullName"} />
        {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-emailAddress"}>
          Email address <span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="email" name="email" placeholder="Enter your email address here" {...register("email")} id={id + "-emailAddress"} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-subject"}>
          Subject<span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="text" name="subject" placeholder="Enter message subject here" {...register("subject")} id={id + "-subject"} />
        {errors.subject && <p className="text-danger">{errors.subject.message}</p>}
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-message"}>
          Enter message here <span className="text-danger">*</span>
        </label>
        <textarea rows="4" className="mb-3" name="message" placeholder="Enter message here" {...register("message")} id={id + "-message"}></textarea>
        {errors.message && <p className="text-danger">{errors.message.message}</p>}
        <button className="green-button button-square py-1 py-md-2 mt-2">Send message</button>
      </form>
      <p className={`fs-0-75rem-to-1-rem font-weight-500 ${isSubmitted ? "d-block" : "d-none"}`}>Message sent..</p>
    </div>
  );
}

export default ContactForm;

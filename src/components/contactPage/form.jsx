import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const id = React.useId();

  return (
    <div className="container text-center py-5">
      <h1 className="fs-1-25-to-2rem">Contact us, we would love to hear from you!</h1>
      <form onSubmit={onFormSubmit} className="contact-form d-flex flex-column mx-auto py-3 py-md-5 text-start">
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-fullName"}>
          Full name<span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="text" name="fullName" value={formData.fullName} placeholder="Enter your full name here" onChange={handleChange} id={id + "-fullName"} />
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-emailAddress"}>
          Email address <span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="email" name="email" value={formData.email} placeholder="Enter your email address here here" onChange={handleChange} id={id + "-emailAddress"} />
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-subject"}>
          Subject<span className="text-danger">*</span>
        </label>
        <input className="mb-2" type="text" name="subject" value={formData.subject} placeholder="Enter message subject here" onChange={handleChange} id={id + "-subject"} />
        <label className="fs-0-75rem-to-1-rem my-1" htmlFor={id + "-message"}>
          Enter message here <span className="text-danger">*</span>
        </label>
        <textarea className="mb-3" name="message" id={id + "-message"} value={formData.message} placeholder="Enter message here" onChange={handleChange}></textarea>
        <button className="green-button button-square py-1 py-md-2 mt-2">Send message</button>
      </form>
      <p className="fs-0-75rem-to-1-rem font-weight-500">Message sent..</p>
    </div>
  );
}

export default ContactForm;

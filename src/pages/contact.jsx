import React from "react";
import ContactForm from "../components/contactPage/form";
import useScrollToTop from "../components/utils/useScrollToTop";

function Contact() {
  useScrollToTop();
  return (
    <>
      <ContactForm />;
    </>
  );
}

export default Contact;

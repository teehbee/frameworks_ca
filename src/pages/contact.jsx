import React from "react";
import ContactForm from "../components/contactPage/form";
import useScrollToTop from "../components/utils/useScrollToTop";

function Contact() {
  useScrollToTop();
  return (
    <main>
      <ContactForm />;
    </main>
  );
}

export default Contact;

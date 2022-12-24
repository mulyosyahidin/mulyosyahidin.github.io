import React from "react";
import { Helmet } from "react-helmet";
import Contact from "../lib/templates/Contact";

function ContactPage(props) {
  return (
    <>
      <Helmet>
        <title>Find Me? | Martin MS</title>
      </Helmet>

      <Contact />
    </>
  );
}

export default ContactPage;

import React from "react";
import { Helmet } from "react-helmet";
import Home from "../lib/templates/Home";

function HomePage(props) {
  return (
    <>
      <Helmet>
        <title>Martin MS - Back End Developer</title>
      </Helmet>

      <Home />
    </>
  );
}

export default HomePage;

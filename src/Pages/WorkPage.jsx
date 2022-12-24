import React from "react";
import { Helmet } from "react-helmet";
import Works from "../lib/templates/Works";

function WorkPage(props) {
  return (
    <>
      <Helmet>
        <title>My Works | Martin MS</title>
      </Helmet>

      <Works />
    </>
  );
}

export default WorkPage;

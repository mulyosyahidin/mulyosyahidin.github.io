import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link to="/" className="navbar-brand">
      Martin MS
    </Link>
  );
}

export default Logo;

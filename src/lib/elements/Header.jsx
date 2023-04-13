import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";

function Header(props) {
  const className = (path) => {
    const location = useLocation();

    if (Array.isArray(path)) {
      return clsx("nav-item", {
        active: path.includes(location.pathname),
      });
    }

    return clsx("nav-item", {
      active: location.pathname === path,
    });
  };

  return (
    <div className="navigation">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Logo />
        <Link to="/contact" className="find-me d-lg-none">
          Find Me
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className={className("/")}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={className(["/works", "project"])}>
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li className={className("/contact")}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className={className()}>
              <a
                className="nav-link"
                href="https://jurnalmms.web.id"
                target={"_blank"}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

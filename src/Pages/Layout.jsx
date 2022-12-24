import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../lib/elements/Footer";
import Header from "../lib/elements/Header";

function Layout(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

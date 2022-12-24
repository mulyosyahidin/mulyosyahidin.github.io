import React from "react";
import { Link } from "react-router-dom";

function Title(props) {
  const { title } = props;

  return (
    <div className="row">
      <div className="col-12 text-center">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="breadcrumbs">
          <ul>
            <li className="color-secondary">
              <Link to="/">Home</Link>
            </li>
            <li className="separator color-secondary">/</li>
            <li className="color-secondary">
              <Link to="/works">Works</Link>
            </li>
            <li className="separator color-secondary">/</li>
            <li>
              <span className="color-primary">{title}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Title;

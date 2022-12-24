import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>© {config.year} {config.fullName}</p>
          </div>
          <div className="col-12 col-md-6 switch">
            <p>
              <small>
                <Link to="/">Ubah ke Bahasa Indonesia</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

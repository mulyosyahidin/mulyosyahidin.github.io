import React from "react";
import config from "../../../config";
import ProfilePicture from "../../components/ProfilePicture";

import SocialLink from "../../components/SocialLink";
import Tool from "../../components/Tool";

function Hero(props) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-8 order-lg-1 order-2 mobile-center">
          <div className="intro">
            <h1>Hello, I'm {config.shortName}</h1>
            <h4>{config.roleName}</h4>
            <p>
              back end engineer with cloud engineering and data science skills
            </p>
            <div className="socials">
              <ul>
                {config.socialLinks.map((social, index) => {
                  return <SocialLink key={index} data={social} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 order-lg-2 order-1">
          <ProfilePicture />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="tools">
            <ul>
              {config.tools.map((tool, index) => {
                return <Tool key={index} data={tool} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import config from "../../../config";

import ProfilePicture from "../../components/ProfilePicture";
import SocialLink from "../../components/SocialLink";

function Contact(props) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-8 order-lg-1 order-2 mobile-center">
          <div className="intro">
            <h1>Find Me?</h1>
            <p>
              Have a question, opportunity to work together or an idea to
              implement? I am available through the following channels:
            </p>
            <div className="socials">
              <ul>
                {config.contactAccounts.map((social, index) => {
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
    </div>
  );
}

export default Contact;

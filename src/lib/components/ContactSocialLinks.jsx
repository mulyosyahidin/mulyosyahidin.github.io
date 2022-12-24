import React from "react";

import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import email from "../../assets/icons/email.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import telegram from "../../assets/icons/telegram.png";

function ContactSocialLinks(props) {
  const { data, index } = props;

  return (
    <div className="socials">
      <ul>
        <li className={"mr-2"}>
          <a
            href="https://www.facebook.com/mt.maytin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li className={"mr-2"}>
          <a
            href="https://www.instagram.com/mul.yoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li className={"mr-2"}>
          <a
            href="mailto:mulyosyahidin95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Email" />
          </a>
        </li>
        <li className={"mr-2"}>
          <a
            href="https://wa.me/6282281666584"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="My WhatsApp" />
          </a>
        </li>
        <li className={"mr-2"}>
          <a
            href="https://telegram.me/martinms23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="My Telegram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactSocialLinks;

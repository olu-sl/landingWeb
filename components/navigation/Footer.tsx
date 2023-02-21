import { Dot } from "components/helpers";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <section className="top">
        <div className="side1"></div>
      </section>

      <section className="bottom">
        <div className="socials">
          <AiFillInstagram className="icon" />
          <RiWhatsappFill className="icon" />
          <BsFacebook className="icon" />
          <BsLinkedin className="icon" />
        </div>
        <div className="misc">
          <p>Terms & Conditions</p>
          <Dot />
          <p>Privacy Policy</p>
          <Dot />
          <p>@osl 2021-2023</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

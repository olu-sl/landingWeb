import { Dot } from "components/helpers";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import FooterNav from "./FooterNav";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section className="top">
        <div className="side1">
          <Image src={`/logo/logoMiniLight.png`} width={90} height={40} className="logo" alt="logo" />

          <p>Keep updated. Join our newsletter.</p>

          <form className="form">
            <input type="email" className="input" placeholder="email address" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="side2">
          <FooterNav />
        </div>
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

import { Dot } from "components/helpers";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import FooterNav, { FooterNavType } from "./FooterNav";
const FooterLinks: FooterNavType[] = [
  {
    heading: `Company`,
    links: [
      {
        Text: "Home",
        href: `/`,
      },
      {
        Text: "About",
        href: `/About`,
      },
      {
        Text: "Services",
        href: `/Services`,
      },
    ],
  },
  {
    heading: `Company`,
    links: [
      {
        Text: "Home",
        href: `/`,
      },
      {
        Text: "About",
        href: `/About`,
      },
      {
        Text: "Services",
        href: `/Services`,
      },
    ],
  },
  {
    heading: `Company`,
    links: [
      {
        Text: "Home",
        href: `/`,
      },
      {
        Text: "About",
        href: `/About`,
      },
      {
        Text: "Services",
        href: `/Services`,
      },
    ],
  },
  {
    heading: `Company`,
    links: [
      {
        Text: "Home",
        href: `/`,
      },
      {
        Text: "About",
        href: `/About`,
      },
      {
        Text: "Services",
        href: `/Services`,
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer>
      <section className="top">
        <div className="side1"></div>
        <div className="side2">
          {FooterLinks.map((FooterLink, i) => (
            <FooterNav key={`footerNav_${i}`} {...FooterLink} />
          ))}
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

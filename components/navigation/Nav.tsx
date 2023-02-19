import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="navcont">
      <nav>
        <p className="logo"></p>
        <ul className={`navs navclose`}>
          <li>
            <Link href={`/`}>
              Home <div id="home" className="line lineActive"></div>
            </Link>
          </li>

          <li>
            About <div id="about" className="line"></div>
          </li>
          <li>
            <Link href={`/allprojects`}>
              Projects <div id="allprojects" className="line"></div>
            </Link>
          </li>
          <li>
            Contact Me <div id="contactme" className="line"></div>
          </li>
        </ul>
        <div className="iconcont">X</div>
      </nav>
    </div>
  );
};

export default Nav;

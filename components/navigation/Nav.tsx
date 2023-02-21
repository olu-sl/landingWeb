import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Nav = () => {
  const route = useRouter().pathname.toLowerCase();
  const [activePage, setActivePage] = useState<string | null>(null);

  const BgColor = () => {
    if (route === "/") {
      return {
        backgroundColor: "#07dfa9",
      };
    }
    if (route.includes("about")) {
      return {
        backgroundColor: "#07dfa9",
      };
    }
    return {
      backgroundColor: "#75baff",
    };
  };
  const SignUpButtonType = () => {
    if (route === "/") return "signUp-2";
    if (route.includes("about")) return "signUp-2";
    return "signUp-4";
  };

  useEffect(() => {
    console.log(route);
    if (route === "/") {
      setActivePage("home");
      return;
    }
    if (route.includes("about")) {
      setActivePage("about");
      return;
    }
    if (route.includes("contact")) {
      setActivePage("contact");
      return;
    }
    if (route.includes("services")) {
      setActivePage("services");
      return;
    }
    setActivePage(null);
  }, [route]);
  return (
    <nav style={BgColor()}>
      <div className="navbar">
        <Image src={`/logo.png`} width={50} height={50} alt="logo" />
        {/* <div className="main"> */}
        <ul className={`navs navclose`}>
          <li>
            <Link href={`/`}>Home</Link>
            <span className={`line ${activePage === "home" ? `lineActive` : ``}`}></span>
          </li>

          <li>
            <Link href={`/Services`}>Services</Link>
            <span className={`line ${activePage === "services" ? `lineActive` : ``}`}></span>
          </li>
          <li>
            <Link href={`/About`}>About</Link>
            <span className={`line ${activePage === "about" ? `lineActive` : ``}`}></span>
          </li>
          <li>
            <Link href={`/Contact`}>Contact Us</Link>
            <span className={`line ${activePage === "contact" ? `lineActive` : ``}`}></span>
          </li>
        </ul>
        <div className="cta">
          <button className="login">Login</button>
          <button className={`signUp ${SignUpButtonType()}`}>Create Account</button>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;

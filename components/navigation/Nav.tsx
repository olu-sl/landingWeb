import { useSidebar } from "Provider/Sidebarprov";
import { NavCta } from "components/cta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
const Nav = () => {
  const route = useRouter().pathname.toLowerCase();
  const [activePage, setActivePage] = useState<string | null>(null);
  const { toggleSidebar, sidebarState } = useSidebar();
  const router = useRouter();
  useEffect(() => {
    //@ts-ignore
    const handleRouteChange = (url) => {
      toggleSidebar(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  const BgColor = () => {
    if (route === "/") {
      return {
        backgroundColor: "#07dfa9",
      };
    }
    if (route.includes("about")) {
      return {
        backgroundColor: "#75baff",
      };
    }
    return {
      backgroundColor: "#fff",
    };
  };

  useEffect(() => {
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
        <Image src={`/logo/logoMiniDarkFull.png`} width={100} height={45} alt="logo" />
        {/* <div className="main"> */}
        <ul className={sidebarState ? `close` : ``}>
          <Link href={`/`}>
            <li>
              Home
              <span className={`line ${activePage === "home" ? `lineActive` : ``}`}></span>
            </li>
          </Link>
          <Link href={`/Services`}>
            <li>
              Services
              <span className={`line ${activePage === "services" ? `lineActive` : ``}`}></span>
            </li>
          </Link>
          <Link href={`/About`}>
            <li>
              About
              <span className={`line ${activePage === "about" ? `lineActive` : ``}`}></span>
            </li>
          </Link>
          <Link href={`/Contact`}>
            <li>
              Contact Us
              <span className={`line ${activePage === "contact" ? `lineActive` : ``}`}></span>
            </li>
          </Link>
          <NavCta />
        </ul>
        <NavCta />
        <div className="hamburger">
          {sidebarState ? (
            <IoClose className="icon" onClick={() => toggleSidebar(false)} />
          ) : (
            <IoMenu className="icon" onClick={() => toggleSidebar(true)} />
          )}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;

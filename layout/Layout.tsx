import { useSidebar } from "Provider/Sidebarprov";
import { Footer, Nav } from "components/navigation";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }: any) => {
  const { toggleSidebar, sidebarState } = useSidebar();


  return (
    <div className={`Layout`}>
      <Nav />
      <div className={`${sidebarState ? `overlay` : `overlayHidden`}`} onClick={() => toggleSidebar(false)}></div>
      <div className="pages">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

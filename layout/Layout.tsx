import { Footer, Nav } from "components/navigation";
import { NextPage } from "next";

const Layout = ({ children }: any) => {
  return (
    <div className={`Layout`}>
      <Nav />
      <div className="pages">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

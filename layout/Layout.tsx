import { Footer, Nav } from "components/navigation";
import { NextPage } from "next";

const Layout = ({ children }: any) => {
  return (
    <div className={`Layout`}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

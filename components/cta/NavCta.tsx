import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const NavCta = () => {
  const route = useRouter().pathname.toLowerCase();

  const SignUpButtonType = () => {
    if (route === "/") return "signUp-2";
    if (route.includes("about")) return "signUp-4";
    return "signUp-1";
  };
  return (
    <div className="cta">
      <button className="login">Login</button>
      <button className={`signUp ${SignUpButtonType()}`}>Create Account</button>
    </div>
  );
};

export default memo(NavCta);

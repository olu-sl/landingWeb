import Link from "next/link";
import { memo } from "react";

export interface FooterNavType {
  heading: string;
  links: {
    Text: string;
    href: string;
  }[];
}
const FooterNav = ({ heading, links }: FooterNavType) => {
  return (
    <div className="nav">
      <h1>Company</h1>
      <ul>
        {links.map((link) => (
          <Link href={link.href}>
            <li>Home</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default memo(FooterNav);

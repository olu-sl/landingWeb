import Link from "next/link";
import { memo } from "react";
interface FooterNavType {
  heading: string;
  links: {
    Text: string;
    href: string;
    notLink?: boolean;
  }[];
}

const FooterLinks: FooterNavType[] = [
  {
    heading: `Company`,
    links: [
      {
        Text: "Price Calculator",
        href: `/`,
        notLink: false,
      },
      {
        Text: "How is works",
        href: `/`,
        notLink: false,
      },
      {
        Text: "Our Services",
        href: `/Services`,
        notLink: false,
      },
      {
        Text: "About Us",
        href: `/About`,
        notLink: false,
      },
    ],
  },
  {
    heading: `Quick Link`,
    links: [
      {
        Text: "Feedback",
        href: `/`,
        notLink: false,
      },
      {
        Text: "FAQ",
        href: `/`,
        notLink: false,
      },
      {
        Text: "Banned Products",
        href: `/`,
        notLink: false,
      },
      {
        Text: "Special Products",
        href: `/`,
        notLink: false,
      },
    ],
  },
  {
    heading: `Customer sevices`,
    links: [
      {
        Text: "Contact us",
        href: `/`,
        notLink: false,
      },
      {
        Text: "Help & Support",
        href: `/About`,
        notLink: false,
      },
    ],
  },
  {
    heading: `Info`,
    links: [
      {
        Text: "OSL Shipping services",
        href: `#`,
        notLink: false,
      },
      {
        Text: "+2348028299167",
        href: `tel:+2348028299167`,
        notLink: true,
      },
      {
        Text: "contact@osl.com",
        href: `mailto:contact@osl.com`,
        notLink: true,
      },
    ],
  },
];

const SingleFooterNav = ({ heading, links }: FooterNavType) => {
  return (
    <div className="nav">
      <h2>{heading}</h2>
      <ul>
        {links.map((link, i) => (
          <li key={`SingleFooterNav_links_${link.Text}_${i}`}>
            {link.notLink ? <a href={link.href}>{link.Text}</a> : <Link href={link.href}>{link.Text}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterNav = () => {
  return (
    <>
      {FooterLinks.map((FooterLink, i) => (
        <SingleFooterNav key={`SingleFooterNav${i}`} {...FooterLink} />
      ))}
    </>
  );
};

export default memo(FooterNav);

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Body1, Header1 } from "components/body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="homePage">
      <Header1 />
      <Body1 />
    </div>
  );
}

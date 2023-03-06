import "../styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "layout/Layout";
import { SidebarProvider } from "Provider/Sidebarprov";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OSL - Shipping made too easy</title>
        <meta name="description" content="OSL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </SidebarProvider>
    </>
  );
}

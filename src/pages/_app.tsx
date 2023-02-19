import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/main.css";
import Layout from "layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OSL - Shipping made too easy</title>
        <meta name="description" content="OSL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import Head from "next/head";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "DZS | NMK natural disasters events",
  description: "Find the latest natural disasters events in NMK",
  keywords: "DZS, NMK, floods, fire, earthquake",
};

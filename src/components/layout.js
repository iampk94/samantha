import React from "react";
import SEO from "./seo";
import Menu from "./navbar";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <main className="layoutMain">
      <SEO />
      <Menu />
      {props.children}
      <Footer />
    </main>
  );
}

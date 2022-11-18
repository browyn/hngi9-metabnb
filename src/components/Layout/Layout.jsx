import React from "react";

import Footer from "./Partials/Footer";
import Header from "./Partials/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;

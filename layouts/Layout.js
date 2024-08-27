import React, { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
        {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;

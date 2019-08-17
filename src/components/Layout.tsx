import React, { Fragment } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC<{}> = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;

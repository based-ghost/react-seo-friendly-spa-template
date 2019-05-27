import React, { Fragment } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC<{}> = (props) => (
  <Fragment>
    <NavBar />
    {props.children}
    <Footer />
  </Fragment>
);

export default Layout;

import React, { Fragment, ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

type LayoutProps = {
  children: ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;

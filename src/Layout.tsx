import React, { Fragment } from 'react';
import { Footer, NavBar, BackToTop } from './components';

const Layout: React.FC = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

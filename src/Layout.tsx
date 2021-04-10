import { Fragment } from 'react';
import { Footer, Navbar, BackToTop } from './components';

import type { FunctionComponent } from 'react';

const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

import { FunctionComponent, Fragment } from 'react';
import { Footer, NavBar, BackToTop } from './components';

const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

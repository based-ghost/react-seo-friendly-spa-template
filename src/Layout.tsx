import { FunctionComponent, Fragment } from 'react';
import { Footer, Navbar, BackToTop } from './components';

const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

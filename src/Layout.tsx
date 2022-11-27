import { Footer, Navbar, BackToTop } from './components';
import { Fragment, type FunctionComponent, type PropsWithChildren } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

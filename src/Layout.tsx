import { Fragment, type FunctionComponent, type PropsWithChildren } from 'react';
import { Footer, Navbar, BackToTop } from './components';

type LayoutProps = PropsWithChildren<unknown>;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;

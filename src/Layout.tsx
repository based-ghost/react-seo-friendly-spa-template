import { Footer, Navbar, BackToTop } from './components';
import { Fragment, type FunctionComponent, type PropsWithChildren } from 'react';

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

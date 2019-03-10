import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout: React.FC<{}> = (props) => (
    <React.Fragment>
        <NavBar />
        {props.children}
        <Footer />
    </React.Fragment>
);

export default Layout;
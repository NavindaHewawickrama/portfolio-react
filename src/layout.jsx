import React from 'react';
import Footer from './components/footer';
import Header from './components/navBar';

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;

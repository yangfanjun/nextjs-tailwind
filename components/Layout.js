import React from 'react';
import Navbar from "./Navbar";
import Footbar from "./Footbar";

const Layout = ({children}) => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="z-50 fixed top-0 left-0 right-0">
                <Navbar/>
            </div>
            {children}
            <Footbar/>
        </div>
    );
};

export default Layout;
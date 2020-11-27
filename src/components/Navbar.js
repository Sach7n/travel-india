import React from 'react';
import logo from  './india.png';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between h-13 flex-wrap bg-red-400 p-4">
            <div className="flex mx-2"> <img src={logo} alt="/" className="w-10 h-6 mt-1"/>
                <p className="mx-6 text-gray-100 text-xl font-semibold">Travel India</p></div>
                
            </nav>
        </div>
    );
};

export default Navbar;
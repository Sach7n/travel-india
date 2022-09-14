import React from 'react';
import logo from  './india.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between h-13 flex-wrap bg-red-400 p-4">
            <a href="/"><div className="flex mx-2"> <img src={logo} alt="/" className="w-10 h-6 mt-1"/>
                <p className="mx-6 text-gray-100 text-xl font-semibold">Travel India</p></div>
                </a>
                <Link to={{ 
                          pathname: "/addItem",
                      }} ><input className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded mx-6" 
               type="submit" 
               value="Add Item"
                />    </Link>
            </nav>
        </div>
    );
};

export default Navbar;
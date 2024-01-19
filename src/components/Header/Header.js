import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import { useGlobalContext } from '../../context/context';

const Header = () => {
    const { activeSection, setActiveSection } = useGlobalContext();
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <header className="container mx-auto p-4 flex justify-between items-center">
            <NavLink
                to="/"
                className="logo text-4xl font-semibold text-gray-800 text-left">
                The Movie Tracker
            </NavLink>
            <Search />
            <div className="flex gap-4 mt-2">
                <button
                    className={`nav-btn py-2 px-4 border border-gray-400 bg-transparent text-gray-800 font-semibold rounded-md cursor-pointer text-xl transition duration-300 ${
                        activeSection === 'movie' ? 'active' : ''
                    }`}
                    onClick={() => handleSectionClick('movie')}>
                    Movies
                </button>
                <button
                    className={`nav-btn py-2 px-4 border border-gray-400 bg-transparent text-gray-800 font-semibold rounded-md cursor-pointer text-xl transition duration-300 ${
                        activeSection === 'tv' ? 'active' : ''
                    }`}
                    onClick={() => handleSectionClick('tv')}>
                    TV Shows
                </button>
            </div>
        </header>
    );
};

export default Header;

//   <header className="container header-section">
//       <NavLink to="/" className="logo">
//           The Movie Tracker
//       </NavLink>
//       {/* <Search /> */}
//       <div className="nav-buttons">
//           <button
//               className={`nav-btn ${activeSection === 'movie' ? 'active' : ''}`}
//               onClick={() => handleSectionClick('movie')}>
//               Movies
//           </button>
//           <button
//               className={`nav-btn ${activeSection === 'tv' ? 'active' : ''}`}
//               onClick={() => handleSectionClick('tv')}>
//               TV Shows
//           </button>
//       </div>
//   </header>;

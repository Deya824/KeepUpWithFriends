import React from 'react';
import logo from '../../assets/logo.png'; 
import { MdHome, MdTimeline, MdBarChart } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center sm:justify-between gap-4  container mx-auto">
      
      <div className="flex items-center">
        {logo && <img src={logo} alt="KeenKeeper Logo" className="h-8 w-auto" />}
      </div>

     
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
        
      
        <li>
          <NavLink to='/' className={({isActive}) => `flex items-center gap-1.5 text-sm font-medium ${isActive ? "bg-[#2D5A4C] text-white px-4 py-1.5 rounded-md hover:bg-[#244a3e] transition-colors" : "bg-white text-gray-500 hover:text-[#2D5A4C] px-4 py-1.5"}`}>
            <MdHome className="w-4 h-4" />
            <span>Home</span>
          </NavLink>
        </li>

      
        <li>
          <NavLink to="/timeline" className={({isActive}) => `flex items-center gap-1.5 text-sm font-medium ${isActive ? "bg-[#2D5A4C] text-white px-4 py-1.5 rounded-md hover:bg-[#244a3e] transition-colors" : "bg-white text-gray-500 hover:text-[#2D5A4C] px-4 py-1.5"}`}>
            <MdTimeline className="w-4 h-4" />
            <span>Timeline</span>
          </NavLink>
        </li>

     
        <li>
          <NavLink to="/stats" className={({isActive}) => `flex items-center gap-1.5 text-sm font-medium ${isActive ? "bg-[#2D5A4C] text-white px-4 py-1.5 rounded-md hover:bg-[#244a3e] transition-colors" : "bg-white text-gray-500 hover:text-[#2D5A4C] px-4 py-1.5"}`}>
            <MdBarChart className="w-4 h-4" />
            <span>Stats</span>
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
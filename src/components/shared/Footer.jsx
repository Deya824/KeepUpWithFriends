import React from 'react';
// Assuming these are your file names. Adjust the extensions/names if needed!
import instagramIcon from '../../assets/instagram.png'; 
import facebookIcon from '../../assets/facebook.png';
import xIcon from '../../assets/twitter.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#2D5A4C] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Top Content: Logo and Tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            KeenKeeper
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Middle Content: Social Links */}
        <div className="flex flex-col items-center mb-24">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-white p-2.5 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="bg-white p-2.5 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
            </a>
            <a href="#" className="bg-white p-2.5 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
              <img src={xIcon} alt="X (Twitter)" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 gap-4">
          <div className="text-center md:text-left">
            &copy; 2026 KeenKeeper. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
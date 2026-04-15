import React from 'react';
import { MdAdd } from 'react-icons/md';

const Banner = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
     
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <button className="inline-flex items-center gap-2 bg-[#2D5A4C] text-white font-medium px-6 py-2.5 rounded-md hover:bg-[#244a3e] transition-colors shadow-sm mb-16">
          <MdAdd className="w-5 h-5" />
          <span>Add a Friend</span>
        </button>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
       
          <div className="bg-white px-6 py-8 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
            <span className="text-3xl font-extrabold text-[#2D5A4C] mb-2">10</span>
            <span className="text-sm text-gray-500 font-medium text-center">Total Friends</span>
          </div>

       
          <div className="bg-white px-6 py-8 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
            <span className="text-3xl font-extrabold text-[#2D5A4C] mb-2">3</span>
            <span className="text-sm text-gray-500 font-medium text-center">On Track</span>
          </div>

        
          <div className="bg-white px-6 py-8 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
            <span className="text-3xl font-extrabold text-[#2D5A4C] mb-2">6</span>
            <span className="text-sm text-gray-500 font-medium text-center">Need Attention</span>
          </div>

         
          <div className="bg-white px-6 py-8 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
            <span className="text-3xl font-extrabold text-[#2D5A4C] mb-2">12</span>
            <span className="text-sm text-gray-500 font-medium text-center">Interactions This Month</span>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Banner;
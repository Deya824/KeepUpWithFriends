import React from 'react';
import { Link } from 'react-router'; // or 'react-router-dom' depending on your setup
import { MdLocationOff } from 'react-icons/md';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        
      
        <MdLocationOff className="w-20 h-20 mx-auto text-[#2D5A4C] mb-4" />
        
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          404
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for doesn't exist or might have been moved.
        </p>
        
      
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-2.5 text-base font-medium rounded-md text-white bg-[#2D5A4C] hover:bg-[#244a3e] transition-colors w-full sm:w-auto shadow-sm"
        >
          Back to Home
        </Link>
        
      </div>
    </div>
  );
};

export default ErrorPage;
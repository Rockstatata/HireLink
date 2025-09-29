import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">HireLink</h1>
            </div>
            <div className="hidden md:block ml-8">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Companies
                </a>
              </div>
            </div>
            <div className="hidden md:block ml-150">
              <div className="  flex items-center space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-200 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition duration-300"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <a
            href="#"
            className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Companies
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 shadow-md"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import logo from "./assets/media/hirelink.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-primary to-primary-light shadow-xl border-b border-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center font-poppins bg-text-inverse/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-primary-light/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={logo}
                  className="w-16 h-auto rounded-md"
                  alt="HireLink Logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-text-inverse hover:text-text-inverse hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Home
                </a>
                <a
                  href="/jobs"
                  className="text-text-inverse hover:text-text-inverse hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Find Jobs
                </a>
                <a
                  href="/companies"
                  className="text-text-inverse hover:text-text-inverse hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Companies
                </a>
                <Link
                  to="/login"
                  className="text-text-inverse hover:text-text-inverse hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-text-inverse text-primary hover:bg-neutral-100 hover:text-primary-dark px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-text-inverse hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-text-inverse transition duration-300"
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
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark">
          <a
            href="#"
            className="text-text-inverse hover:text-text-inverse hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="text-text-inverse hover:text-text-inverse hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-text-inverse hover:text-text-inverse hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Companies
          </a>
          <Link
            to="/login"
            className="text-text-inverse hover:text-text-inverse hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-text-inverse text-primary hover:bg-neutral-100 hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

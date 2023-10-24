import React from 'react';
import logo from '../images/logo.svg.svg';

function Header() {
  return (
    <header className="bg-white pb-0">
      <div className="mx-auto max-w-7xl px-8">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-1">
            <img src={logo} alt="logo" />
            <h1 className="font-bold">MED EYE</h1>
          </div>

          <div className="flex items-center ml-auto space-x-10">
            <a
              href="#how-works"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-gray-600 focus:text-gray-600"
            >
              {' '}
              How It Works{' '}
            </a>

            <a
              href="#faq"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-gray-600 focus:text-gray-600"
            >
              {' '}
              FAQ{' '}
            </a>

            <a
              href="#about"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-gray-600 focus:text-gray-600"
            >
              {' '}
              About Us{' '}
            </a>

            <a
              href="#contact"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-gray-600 focus:text-gray-600"
            >
              {' '}
              Contact Us{' '}
            </a>
          </div>

          <a
            href="/#"
            title=""
            className="items-center justify-center px-6 py-2 ml-10 text-base text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md inline-flex hover:bg-gray-700 focus:bg-gray-700"
            role="button"
          >
            {' '}
            Login{' '}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

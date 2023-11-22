import React from 'react';
import logo from '../images/logo.svg.svg';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

function HWHeader() {
  const { translations } = useContext(LanguageContext);
  return (
    <header className="bg-white pb-0">
      <div className="mx-auto max-w-7xl px-8">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-1">
            <img src={logo} alt="logo" />
            <h1 className="font-bold">MED EYE</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="font-thin text-sm">
              {translations.health_worker}
            </span>
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HWHeader;

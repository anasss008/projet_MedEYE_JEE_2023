import React from 'react';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

function Footer() {
  const { translations } = useContext(LanguageContext);
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {translations.copyright}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/#" className="mr-4 hover:underline md:mr-6 ">
              {translations.about_us}
            </a>
          </li>
          <li>
            <a href="/#" className="hover:underline">
              {translations.contact_us}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

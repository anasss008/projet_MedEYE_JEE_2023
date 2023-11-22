import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { US, FR } from 'country-flag-icons/react/3x2';
import { LanguageIcon } from '@heroicons/react/24/outline';

const LanguageSwitcher = () => {
  const { changeLanguage } = useContext(LanguageContext);
  return (
    <div className="flex justify-center space-x-4 pt-2">
      <LanguageIcon className="w-5" /> :
      <button
        onClick={() => changeLanguage('english')}
        className="flex items-center space-x-1"
      >
        <US title="English" className="w-5" />
        <p>English</p>
      </button>
      <button
        onClick={() => changeLanguage('french')}
        className="flex items-center space-x-1"
      >
        <FR title="French" className="w-5" />
        <p>French</p>
      </button>
      {/* More buttons for other languages */}
    </div>
  );
};

export default LanguageSwitcher;

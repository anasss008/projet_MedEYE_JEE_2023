import React from 'react';
import HeroImg from '../images/hero.png';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

function Hero() {
  const { translations } = useContext(LanguageContext);
  return (
    <div className="pt-20 px-12 flex justify-around">
      <div className="w-1/3 space-y-6">
        <h2 className="font-extrabold text-4xl">{translations.main_heading}</h2>
        <p>{translations.main_subheading}</p>
        <div className="flex space-x-4">
          <p className="font-medium text-3xl">+45%</p>
          <p className="font-light text-lg leading-tight max-w-xs tracking-wide">
            {translations.statistic}
          </p>
        </div>
        <form className="max-w-md">
          <div className="relative">
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-gray-500 focus:border-gray-500"
              placeholder={translations.enter_email}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              {translations.get_notified}
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/3">
        <img src={HeroImg} className="rounded-lg" alt="Eye" />
      </div>
    </div>
  );
}

export default Hero;

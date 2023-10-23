import React from 'react';
import HeroImg from '../images/hero.png';

function Hero() {
  return (
    <div className="pt-20 px-12 flex justify-around">
      <div className="w-1/3 space-y-6">
        <h2 className="font-extrabold text-4xl">
          Predicting Eye Diseases with Cutting-edge Machine Learning Models
        </h2>
        <p>Early detection made easier with advanced AI algorithms</p>
        <div className="flex space-x-4">
          <p className="font-medium text-3xl">+45%</p>
          <p className="font-light text-lg leading-tight max-w-xs tracking-wide">
            of cases could have been <br /> treated if detected early.
          </p>
        </div>
        <form className="max-w-md">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter email address"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Get Notified
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

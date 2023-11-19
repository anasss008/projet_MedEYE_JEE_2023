import React from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  UserCircleIcon,
  AtSymbolIcon,
  HomeIcon,
  CameraIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const Result = () => {
  const location = useLocation();
  const result = location.state
    ? location.state.prediction
    : 'No result available';
  const image = location.state.imageUrl;
  const person = location.state.person;
  console.log(image);
  console.log(person);

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold">Prediction Result :</h2>
      <div className="w-1/5 mx-auto my-10">
        <CircularProgressbar value={result * 100} text={`${result * 100}%`} />
      </div>
      <p className="text-center pb-5">
        Based on the result of our Machine Learning Model the prediction for the
        Patient is to be{' '}
        <span className="font-bold text-2xl">{result * 100} % </span>
        having Cataract disease
      </p>
      <div className="border"></div>
      <h2 className="font-semibold text-lg text-center py-5">Patient Info :</h2>
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm pl-28 space-y-12">
        <div className="flex items-center space-x-2 mb-2 pt-5">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>First Name:</strong> {person.first_name}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Last Name:</strong> {person.last_name}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <AtSymbolIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Email:</strong> {person.email}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <HomeIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Address:</strong> {person.address}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <CameraIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Uploaded Image:</strong>
          </p>
        </div>
        <img src={image} alt="Uploaded" className="mt-2 max-w-xs rounded-lg" />
      </div>
      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <DocumentTextIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          Generate PDF Report
        </button>
      </div>
    </div>
  );
};

export default Result;

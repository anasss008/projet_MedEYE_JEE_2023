import React from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  UserCircleIcon,
  AtSymbolIcon,
  HomeIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';

const Result = () => {
  const location = useLocation();
  const result = location.state
    ? location.state.prediction
    : 'No result available';

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold">Prediction Result :</h2>
      <div className="w-1/5 mx-auto my-10">
        <CircularProgressbar value={result * 100} text={`${result * 100}%`} />
      </div>
      <p className="text-center">
        Based on the result of our Machine Learning Model the prediction for the
        Patient is to be {result * 100} % having Cataract disease
      </p>
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 mb-2">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>First Name:</strong> firstName
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Last Name:</strong> lastName
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <AtSymbolIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Email:</strong> email
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <HomeIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Address:</strong> address
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <CameraIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>Uploaded Image:</strong>
          </p>
        </div>
        {/* <img src="" alt="Uploaded" className="mt-2 max-w-xs rounded-lg" /> */}
      </div>
    </div>
  );
};

export default Result;

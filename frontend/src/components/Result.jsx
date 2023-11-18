import React from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    </div>
  );
};

export default Result;

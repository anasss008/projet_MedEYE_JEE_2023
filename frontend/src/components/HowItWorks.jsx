import React from 'react';
import { ReactComponent as SvgComponent1 } from '../images/svg1.svg';
import { ReactComponent as SvgComponent2 } from '../images/svg2.svg';
import { ReactComponent as SvgComponent3 } from '../images/svg3.svg';
import { ReactComponent as SvgComponent4 } from '../images/svg4.svg';
import { ReactComponent as SvgComponent5 } from '../images/svg5.svg';

const HowItWorks = () => {
  return (
    <div className="px-40 py-10" id="how-works">
      <h1 className="text-3xl mb-20 text-center font-extrabold">
        How It Works
      </h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <SvgComponent1 />
          <h2 className="text-xl mt-4 font-bold">Sign Up/Login</h2>
          <p className="text-center mt-2 max-w-sm">
            Begin by creating an account using a valid email address. If you're
            a returning user, simply log in.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent2 />
          <h2 className="text-xl mt-4 font-bold">Upload Image</h2>
          <p className="text-center mt-2 max-w-sm">
            Use our user-friendly interface to upload a clear image of your eye.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent3 />
          <h2 className="text-xl mt-4 font-bold">Machine Learning Analysis</h2>
          <p className="text-center mt-2 max-w-sm">
            Our advanced machine learning algorithm gets to work. It processes
            the image, to identify patterns, abnormalities, or signs of
            potential eye diseases.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent4 />
          <h2 className="text-xl mt-4 font-bold">Results</h2>
          <p className="text-center mt-2 max-w-sm">
            After the analysis, you'll receive a detailed report on our
            platform.
          </p>
        </div>
        <div></div>
        <div className="flex flex-col items-center">
          <SvgComponent5 />
          <h2 className="text-xl mt-4 font-bold">Consultation and Follow-Up</h2>
          <p className="text-center mt-2 max-w-sm">
            If any concerns are detected, we advise to consult with an
            ophthalmologist or optometrist for a comprehensive eye exam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

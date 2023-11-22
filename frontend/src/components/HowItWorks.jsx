import React from 'react';
import { ReactComponent as SvgComponent1 } from '../images/svg1.svg';
import { ReactComponent as SvgComponent2 } from '../images/svg2.svg';
import { ReactComponent as SvgComponent3 } from '../images/svg3.svg';
import { ReactComponent as SvgComponent4 } from '../images/svg4.svg';
import { ReactComponent as SvgComponent5 } from '../images/svg5.svg';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

const HowItWorks = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <div className="px-40 py-10" id="how-works">
      <h1 className="text-3xl mb-20 text-center font-extrabold">
        {translations.how_it_works}
      </h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <SvgComponent1 />
          <h2 className="text-xl mt-4 font-bold">{translations.sign_up}</h2>
          <p className="text-center mt-2 max-w-sm">
            {translations.sign_up_description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent2 />
          <h2 className="text-xl mt-4 font-bold">
            {translations.upload_image}
          </h2>
          <p className="text-center mt-2 max-w-sm">
            {translations.upload_image_description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent3 />
          <h2 className="text-xl mt-4 font-bold">{translations.ml_analysis}</h2>
          <p className="text-center mt-2 max-w-sm">
            {translations.ml_analysis_description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <SvgComponent4 />
          <h2 className="text-xl mt-4 font-bold">{translations.results}</h2>
          <p className="text-center mt-2 max-w-sm">
            {translations.results_description}
          </p>
        </div>
        <div></div>
        <div className="flex flex-col items-center">
          <SvgComponent5 />
          <h2 className="text-xl mt-4 font-bold">
            {translations.consultation}
          </h2>
          <p className="text-center mt-2 max-w-sm">
            {translations.consultation_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

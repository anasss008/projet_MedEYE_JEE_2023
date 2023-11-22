import React from 'react';
import { ReactComponent as SvgComponent6 } from '../images/svg6.svg';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

const ContactUs = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 p-8"
      id="contact"
    >
      <h2 className="text-3xl font-semibold mb-4">{translations.contact_us}</h2>
      <p className="text-center mb-4 font-light">
        {translations.contact_prompt}
      </p>
      <div className="flex flex-col items-center">
        <SvgComponent6 className="w-20" />
        <a
          href="mailto:email@email.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          email@email.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;

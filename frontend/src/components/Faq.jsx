import React from 'react';
import { useState } from 'react';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { translations } = useContext(LanguageContext);

  const toggleAnswer = (index) => {
    setActiveIndex(index);
  };
  const faqData = [
    {
      question: translations.faq_question1,
      answer: translations.faq_answer1,
    },
    {
      question: translations.faq_question2,
      answer: translations.faq_answer2,
    },
    {
      question: translations.faq_question3,
      answer: translations.faq_answer3,
    },
    {
      question: translations.faq_question4,
      answer: translations.faq_answer4,
    },
  ];
  return (
    <section className="py-24 flex justify-center" id="faq">
      <div>
        <div className="max-w-2xl text-center">
          <h2 className="font-bold leading-tight text-black text-4xl">
            {translations.faq_heading}
          </h2>
          <p className="text-center text-gray-600 textbase my-9">
            {translations.faq_contact_prompt}{' '}
            <a
              href="#contact"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              {translations.contact_support}
            </a>
          </p>
        </div>

        <div>
          <div className="max-w-3xl">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                onClick={() => toggleAnswer(index)}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {' '}
                    {item.question}{' '}
                  </span>
                  <svg
                    className={
                      activeIndex === index
                        ? 'w-6 h-6 text-gray-400'
                        : 'w-6 h-6 text-gray-400 rotate-180'
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={
                    activeIndex === index
                      ? 'px-4 pb-5 sm:px-6 sm:pb-6'
                      : 'hidden px-4 pb-5 sm:px-6 sm:pb-6'
                  }
                >
                  <p className="font-light">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;

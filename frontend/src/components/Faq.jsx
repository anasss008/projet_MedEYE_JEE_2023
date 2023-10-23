import React from 'react';
import { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setActiveIndex(index);
  };
  const faqData = [
    {
      question: 'What is MedEye?',
      answer:
        'MedEye is an advanced platform that uses machine learning algorithms to provide predictions for potential eye diseases based on the information or images provided .',
    },
    {
      question: "How accurate is MedEye's prediction?",
      answer:
        "MedEye boasts a high accuracy rate due to its sophisticated algorithms. While our platform provides valuable insights, it's essential to consult with a healthcare professional for a definitive diagnosis.",
    },
    {
      question: 'Is MedEye a replacement for professional medical advice?',
      answer:
        'No. MedEye is a supplementary tool designed to provide preliminary insights. Always seek the advice of a qualified healthcare professional regarding any medical concerns.',
    },
    {
      question: 'Is my data safe with MedEye?',
      answer:
        'Absolutely. We prioritize user privacy and data security. All images and data you provide are encrypted and stored securely, and we never share them with third parties without explicit consent.',
    },
  ];
  return (
    <section className="py-24 flex justify-center">
      <div>
        <div className="max-w-2xl text-center">
          <h2 className="font-bold leading-tight text-black text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 textbase my-9">
            Didn’t find the answer you are looking for?{' '}
            <a
              href="/#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
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
                  <p>{item.answer}</p>
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

import React from 'react';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

const DoctorsTable = ({ doctors }) => {
  const { translations } = useContext(LanguageContext);
  return (
    <div className="mx-16 overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              {translations.name}
            </th>
            <th scope="col" className="py-3 px-6">
              {translations.email}
            </th>
            <th scope="col" className="py-3 px-6">
              {translations.num_tel}
            </th>
            <th scope="col" className="py-3 px-6">
              {translations.address}
            </th>
            <th scope="col" className="py-3 px-6">
              {translations.city}
            </th>
            <th scope="col" className="py-3 px-6">
              {translations.availability}
            </th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr
              key={doctor.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-4 px-6">{doctor.name}</td>
              <td className="py-4 px-6">{doctor.email}</td>
              <td className="py-4 px-6">{doctor.phoneNumber}</td>
              <td className="py-4 px-6">{doctor.address}</td>
              <td className="py-4 px-6">{doctor.ville}</td>
              <td
                className={
                  doctor.availability === 'true'
                    ? 'py-4 px-6 text-green-600'
                    : 'py-4 px-6 text-red-600'
                }
              >
                {doctor.availability === 'true'
                  ? translations.available
                  : translations.unavailable}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;

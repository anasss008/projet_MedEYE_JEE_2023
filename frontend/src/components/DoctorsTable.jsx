import React from 'react';

const DoctorsTable = ({ doctors }) => {
  return (
    <div className="mx-16 overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              City
            </th>
            <th scope="col" className="py-3 px-6">
              Availability
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
                {doctor.availability === 'true' ? 'Available' : 'Unavailable'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;

import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  UserCircleIcon,
  AtSymbolIcon,
  HomeIcon,
  CameraIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CheckIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import DoctorsTable from './DoctorsTable';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

const Result = () => {
  const { translations } = useContext(LanguageContext);
  const location = useLocation();
  const result = location.state
    ? location.state.prediction
    : 'No result available';
  const image = location.state.imageUrl;
  const person = location.state.person;
  console.log(image);
  console.log(person);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.addImage('/logo.png', 'PNG', 0, 0, 40, 40, '', 'center');
    const title = 'Cataract Detection Report';
    const subTitle = 'by MedEye';
    const pageWidth = doc.internal.pageSize.getWidth();
    const titleWidth =
      (doc.getStringUnitWidth(title) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const titleX = (pageWidth - titleWidth) / 2.5; // Calculates the x coordinate for centered alignment

    doc.setFontSize(22);
    doc.text(title, titleX, 20); // 20 is the y-coordinate

    const subTitleWidth =
      (doc.getStringUnitWidth(subTitle) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const subTitleX = (pageWidth - subTitleWidth) / 2;
    doc.setFontSize(16);
    doc.text(subTitle, subTitleX, 30);

    const tableColumn = ['First Name', 'Last Name', 'Email', 'Prediction'];
    const tableRows = [];

    tableRows.push([
      person.first_name,
      person.last_name,
      person.email,
      `${(result * 100).toFixed(2)}%`,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 80,
      theme: 'striped',
      headStyles: { fillColor: [22, 160, 133], textColor: 255, fontSize: 12 },
      bodyStyles: { fillColor: [255, 255, 255], textColor: 0, fontSize: 10 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    // if (image) {
    //   doc.addImage(image, 'JPEG', 10, 60, 50, 50);
    // }

    doc.save('report.pdf');
  };

  const [saveSuccess, setSaveSuccess] = useState(false);

  const saveToDb = async () => {
    const patient = {
      firstName: person.first_name,
      lastName: person.last_name,
      address: person.address,
      email: person.email,
      imageUrl: image,
      prediction: parseFloat(result),
    };
    try {
      const response = await fetch('http://localhost:8080/savetest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
      });

      if (response.ok) {
        console.log('Patient saved successfully');
        setSaveSuccess(true);
      } else {
        console.error('Error saving patient');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const [doctors, setDoctors] = useState(null);

  const checkDoctors = async () => {
    try {
      const parts = person.address.split(' ');
      const ville = parts[parts.length - 1];
      console.log(ville);
      const response = await fetch(
        `http://localhost:8080/api/doctors/ville/${ville}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Doctors checked');
        console.log(data);
        setDoctors(data);
      } else {
        console.error('Error checking docs');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold">
        {translations.prediction} :
      </h2>
      <div className="w-1/5 mx-auto my-10">
        <CircularProgressbar value={result * 100} text={`${result * 100}%`} />
      </div>
      <p className="text-center pb-5">
        {translations.prediction_output}{' '}
        <span className="font-bold text-2xl">{result * 100} % </span>
        {translations.having_cataract}
      </p>
      <div className="border"></div>
      <h2 className="font-semibold text-lg text-center py-5">
        {translations.patient_info} :
      </h2>
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm pl-28 space-y-12">
        <div className="flex items-center space-x-2 mb-2 pt-5">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>{translations.first_name}:</strong> {person.first_name}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>{translations.last_name}:</strong> {person.last_name}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <AtSymbolIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>{translations.email}:</strong> {person.email}
          </p>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <HomeIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>{translations.address}:</strong> {person.address}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <CameraIcon className="h-5 w-5 text-gray-500" />
          <p>
            <strong>{translations.uploaded_image}</strong>
          </p>
        </div>
        <img src={image} alt="Uploaded" className="mt-2 max-w-xs rounded-lg" />
      </div>
      <div className="flex justify-center space-x-5 py-16">
        <button
          type="button"
          onClick={generatePDF}
          className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <DocumentTextIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          {translations.pdf_report}
        </button>
        {/* save to db */}
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          onClick={saveToDb}
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          {translations.save_to_database}
        </button>
        <button
          className="flex items-center bg-slate-500 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded"
          onClick={checkDoctors}
        >
          <HeartIcon className="h-5 w-5 mr-2" />
          {translations.nearby_doctors}
        </button>
      </div>
      {saveSuccess && (
        <div className="text-white flex bg-green-500 rounded px-4 py-2 mt-5 m-16">
          <CheckIcon className="w-5" />
          <div>{translations.patient_saved}</div>
        </div>
      )}
      {doctors && <DoctorsTable doctors={doctors} />}
    </div>
  );
};

export default Result;

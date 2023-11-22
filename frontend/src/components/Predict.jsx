import { PhotoIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Loading } from '../images/tadpole.svg';
import { LanguageContext } from '../translationComponents/LanguageContext';
import { useContext } from 'react';

const api_url = 'http://localhost:8080/upload';

export default function Predict() {
  const { translations } = useContext(LanguageContext);
  const navigate = useNavigate();
  const initialState = {
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    image: null,
  };

  const [person, setPerson] = useState(initialState);
  const [prediction, setPrediction] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (prediction !== null && imageUrl !== null) {
      navigate('/result', { state: { prediction, imageUrl, person } });
    }
  }, [prediction, imageUrl]);

  const submitForm = (e) => {
    e.preventDefault(true);
    setSpinner(true);
    const formData = new FormData();
    formData.append('first_name', person.first_name);
    formData.append('last_name', person.last_name);
    formData.append('email', person.email);
    formData.append('address', person.address);
    formData.append('image', person.image);

    axios
      .post(api_url, formData)
      .then((response) => {
        console.log('sent successfully');
        console.log(response.data);
        setImageUrl(response.data.url);
        const threshold = 0.01;
        const formatedResponse =
          Math.abs(response.data.prediction) < threshold
            ? 0
            : Number(response.data.prediction).toFixed(2);
        setPrediction(formatedResponse);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setTimeout(() => {
    //   setPrediction('0.95');
    // }, 2000);
  };

  const onChangeHandler = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
      setPerson((prev) => {
        return { ...prev, [name]: event.target.files[0] };
      });
    } else {
      setPerson((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="max-w-xl py-20 mx-auto space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
            {translations.enter_patient_info}
          </h2>
          <p className="mt-1 text-sm text-center leading-6 text-gray-600">
            {translations.info_accuracy_prompt}
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {translations.first_name}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={onChangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {translations.last_name}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={onChangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {translations.email}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {translations.address}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className="pt-10 col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {translations.upload_fundus_photo}
            </label>
            {!imagePreview && (
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 hover:text-gray-500"
                    >
                      <span>{translations.upload_file_prompt}</span>
                      <input
                        id="file-upload"
                        name="image"
                        type="file"
                        className="sr-only"
                        onChange={onChangeHandler}
                      />
                    </label>
                    <p className="pl-1">{translations.or_drag_drop}</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    {translations.file_formats}
                  </p>
                </div>
              </div>
            )}
            {imagePreview && (
              <div className="pt-10 max-w-lg mx-auto">
                <img src={imagePreview} className="" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <button
          type="submit"
          className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          {translations.submit_button}
        </button>
      </div>

      {/* {prediction && (
        <div>
          <p>Model prediction: {prediction}</p>
        </div>
      )} */}
      {spinner && (
        <div>
          <Loading className="mx-auto mt-5" />
        </div>
      )}
    </form>
  );
}

import { PhotoIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useState } from 'react';
const api_url = "http://localhost:8080/upload"


export default function Predict() {
  const initialState = {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    image: null,
  };

  const [person, setPerson] = useState(initialState);
  const [response, setResponse] = useState(null);


  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', person.first_name);
    formData.append('last_name', person.last_name);
    formData.append('email', person.email);
    formData.append('address', person.address);
    formData.append('image', person.image);

    axios.post(api_url, formData)
      .then((response) => {
        console.log("sent successfully");
        setResponse(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      console.log("image uploaded");
      setPerson((prev) => {
        return { ...prev, [name]: event.target.files[0] };
      });
    } else {
      console.log(name);
      console.log("text entered");
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
            Enter Patient Information
          </h2>
          <p className="mt-1 text-sm text-center leading-6 text-gray-600">
            This information should be accurate.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={onChangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoComplete="family-name"
               
                  onChange={onChangeHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
              Upload Patient's Fundus photo
            </label>
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
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="image"
                      type="file"
                      className="sr-only"
                      onChange={onChangeHandler}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <button
          type="submit"
          className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Send for Prediction
        </button>
      </div>
    </form>
  );
}

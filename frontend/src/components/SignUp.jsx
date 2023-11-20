/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        navigate('/login');
        // You can now handle the token, e.g., store it in local storage or a state management system for user authentication
      } else {
        const errorData = await response.text();
        console.log(errorData);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const handleEmailChange = (e) => {
    const username = e.target.value;
    setFormData({
      ...formData,
      username,
    });
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormData({
      ...formData,
      password,
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-8">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to an account
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={formData.username}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6"
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account{' '}
            <Link
              to="/login"
              className="font-semibold leading-6 text-gray-900 hover:text-gray-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

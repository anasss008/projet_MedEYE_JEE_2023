import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useState(false); // State to store the token
  const [error, setError] = useState(''); // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      console.log(formData);
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
        setAuth(true);
        navigate('/predict');
      } else {
        const errorData = await response.text();
        setError(errorData.errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while making the request.');
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
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
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
                Log in
              </button>
            </div>
          </form>

          {/* Display errors if any */}
          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account{' '}
            <Link
              to="/sign-up"
              className="font-semibold leading-6 text-gray-900 hover:text-gray-500"
            >
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

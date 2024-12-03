import { useState } from 'react';

function LoginPage() {
  const [credentials, setCreds] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreds({
      ...credentials,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    // axios request to backend
    console.log('Logging in with', credentials);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClickLogin();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log("Login attempt:", { email, password });

    navigate("/Patient");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-5">
      <div className="bg-white rounded-lg shadow-md p-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">MediBridge</h1>
          <p className="text-gray-500 text-sm">
            Chronic Care Self-Management System
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignIn} className="mb-6">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md
                       font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <div className="text-center border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm">
            Dont have an account?{" "}
            <span
              onClick={handleRegisterClick}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

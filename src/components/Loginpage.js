import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoginStatus("Successfully logged in");
      window.alert("Successfully logged in");
      navigate("/fbhome");
    } else {
      setLoginStatus("Invalid email or password");
      window.alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:py-24 px-12">
          <div className="mb-6">
            <h1 className="text-5xl text-blue-600 font-bold mb-3">facebook</h1>
            <p className="text-gray-600 text-xl">
              Connect with friends and the world
            </p>
            <p className="text-gray-600 text-xl">around you on Facebook.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 md:pl-8">
          <form
            className="bg-white p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full block text-center p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
            <a href="#" className="block text-center text-blue-600 mt-4">
              Forgot password?
            </a>
            <div className="my-4 border-b border-gray-300"></div>
            <Link
              to="/signup"
              className="block text-center w-full p-3 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
            >
              Create New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;

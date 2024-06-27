import React from "react";
import "../App.css";

function Fbhome() {
  return (
    <div>
      <h1 className="text-4xl text-blue-600 font-bold mb-3 m-3">facebook</h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full bg-white rounded-lg shadow dark:border md:m-0 m-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <h1 className="text-3xl text-center text-blue-600 font-bold mb-3 m-3">
              Welcome To Facebook
            </h1>
            <h2 className="block text-center text-black mt-4">
              The world biggest social network
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fbhome;

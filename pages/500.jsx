// pages/500.js (Next.js example)

import React from 'react';

const InternalServerError = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-extrabold text-green-700">500</h1>
        <h2 className="text-2xl font-semibold mt-4 text-blue-800">Oops! Something went wrong on our end.</h2>
        <p className="mt-2 text-gray-600">
          We’re working to fix it. Please try again later or go back to the homepage.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to Homepage
          </a>
        </div>
      </div>
      <div className="mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/2 mx-auto"
          viewBox="0 0 512 512"
          fill="none"
        >
          <rect width="512" height="512" rx="15%" fill="#F3F4F6" />
          <path
            d="M261.5 140a23 23 0 1 0 46 0 23 23 0 0 0-46 0zm-72 208c0 38 44 72 100 72s100-34 100-72"
            stroke="#10B981"
            strokeWidth="12"
          />
          <path
            d="M180 300c8 0 15-7 15-15v-90c0-8-7-15-15-15H150c-8 0-15 7-15 15v90c0 8 7 15 15 15h30zm182 0c8 0 15-7 15-15v-90c0-8-7-15-15-15h-30c-8 0-15 7-15 15v90c0 8 7 15 15 15h30z"
            fill="#3B82F6"
          />
          <path
            d="M200 370h110"
            stroke="#3B82F6"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default InternalServerError;

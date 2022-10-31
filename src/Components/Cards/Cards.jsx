import React from "react";

const Cards = () => {
  return (
    <div className="p-6 max-w-[100%] mx-2 my-3 bg-white rounded-lg border border-gray-200 shadow-md">
      <svg
        aria-hidden="true"
        className="mx-auto mb-3 w-12 h-12 text-gray-400"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        ></path>
      </svg>

      <p className="mb-3 font-normal text-gray-500">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
      <div className="mb-3">
        <span className="bg-violet-200 rounded px-3 py-1 text-xs text-violet-600 font-bold">
          Love
        </span>
      </div>
      <a
        href="/"
        className="inline-flex items-center text-violet-600 hover:underline"
      >
        View Quote
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Cards;

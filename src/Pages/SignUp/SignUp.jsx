import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignup = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-5">
      <h6 className="mt-4 mb-8 text-xs font-medium text-gray-600 font-mono tracking-tighter">
        Become a user - you can access all the features of Conceptual Auth App.
      </h6>
      <form onSubmit={handleSignup}>
        <label htmlFor="email" className="text-gray-500 text-sm pb-2 block">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-3">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>

          <input
            type="text"
            id="fullname"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:bg-white focus:border-violet-200 block w-full pl-10 p-2.5 placeholder:text-gray-500"
            placeholder="Enter your name"
          />
        </div>

        <label htmlFor="email" className="text-gray-500 text-sm pb-2 block">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-3">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>

          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:bg-white focus:border-violet-200 block w-full pl-10 p-2.5 placeholder:text-gray-500"
            placeholder="Enter your email address"
          />
        </div>

        <label htmlFor="password" className="text-gray-500 text-sm pb-2 block">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              aria-hidden="true"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:bg-white focus:border-violet-200 block w-full pl-10 p-2.5 placeholder:text-gray-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mt-6"
        >
          Sign Up
        </button>
      </form>
      <div className="flex justify-between items-center mt-3">
        <button className="text-black hover:text-white bg-white border hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mr-1">
          <i className="fa-brands fa-google"></i> Signup with Google
        </button>
        <button className="text-black hover:text-white bg-white border hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full ml-1">
          <i className="fa-brands fa-github"></i> Signup with Github
        </button>
      </div>
      <div className="inline-flex justify-center items-center w-full mt-2">
        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute left-1/2 px-3 font-medium text-gray-400 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
          or
        </span>
      </div>
      <div className="text-center text-gray-500 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-violet-800 text-sm font-bold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

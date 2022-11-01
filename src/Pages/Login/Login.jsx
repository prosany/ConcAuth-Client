import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const { user, socialLogin, loginUser } = useContext(UserContext);
  const { state } = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password);
  };

  if (user?.uid) {
    return <Navigate to={state?.pathname || "/"} />;
  }

  return (
    <div className="my-5">
      <h6 className="mt-4 mb-8 text-xs font-medium text-gray-600 font-mono tracking-tighter">
        Login to your account / become a user - you can access all the features
        of Conceptual Auth App.
      </h6>
      <form onSubmit={handleLogin}>
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
            name="email"
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
            name="password"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:bg-white focus:border-violet-200 block w-full pl-10 p-2.5 placeholder:text-gray-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-end items-center my-4">
          <Link to="/forgot-password" className="text-violet-800 text-sm">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
        >
          Login
        </button>
      </form>
      <div className="flex justify-between items-center mt-3">
        <button
          className="text-black hover:text-white bg-white border hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mr-1"
          onClick={() => socialLogin("google")}
        >
          <i className="fa-brands fa-google"></i> Signin with Google
        </button>
        <button
          className="text-black hover:text-white bg-white border hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full ml-1"
          onClick={() => socialLogin("github")}
        >
          <i className="fa-brands fa-github"></i> Signin with Github
        </button>
      </div>
      <div className="inline-flex justify-center items-center w-full mt-2">
        <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute left-1/2 px-3 font-medium text-gray-400 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
          or
        </span>
      </div>
      <div className="text-center text-gray-500 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-violet-800 text-sm font-bold">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;

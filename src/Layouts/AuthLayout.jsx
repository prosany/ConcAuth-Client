import React from "react";
import AuthHeader from "../Components/Header/AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <>
      {/* <div className="bg-blur"></div> */}
      <div className="z-30 lg:w-[30%] md:w-[95%] w-[95%] bg-white mx-auto border border-gray-200 px-5 py-5 rounded-lg fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <AuthHeader />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;

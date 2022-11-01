import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <>
      <header>
        <Link to="/" className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/mahabubsunny/image/upload/v1667210617/programming-hero/ph_ts6dfk.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            ConcAuth
            <p className="text-left text-xs font-extralight mt-[-5px]">
              Auth for Superheros
            </p>
          </span>
        </Link>
      </header>
    </>
  );
};

export default AuthHeader;

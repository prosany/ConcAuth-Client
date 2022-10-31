import React from "react";

const Details = () => {
  return (
    <>
      <div role="status" className="animate-pulse">
        <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-2.5 mx-auto bg-gray-300 rounded-full max-w-[540px]"></div>
        <div className="h-2.5 mx-auto bg-gray-300 rounded-full max-w-[340px] mt-2.5"></div>
        <div className="flex justify-center items-center mt-4">
          <svg
            className="mr-2 w-10 h-10 text-gray-200"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-20 h-2.5 bg-gray-200 rounded-full mr-3"></div>
          <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>

      <figure className="mx-auto max-w-screen-md text-center">
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
        <blockquote>
          <p className="text-2xl italic font-medium text-gray-90">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="Author"
          />
          <div className="flex items-center divide-x-2 divide-gray-500">
            <cite className="pr-3 font-medium text-gray-900 ">
              Micheal Gough
            </cite>
            <cite className="pl-3 text-sm font-light text-gray-500">
              CEO at Google
            </cite>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default Details;

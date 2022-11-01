import React from "react";

const Profile = () => {
  return (
    <div className="pt-5 pb-10">
      <div className="w-full mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-col items-center pt-4">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src="https://res.cloudinary.com/mahabubsunny/image/upload/v1667210617/programming-hero/ph_ts6dfk.png"
            alt="Bonnie"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Mahabub Sany
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Instructor
          </span>
        </div>
        <div className="flex my-5 justify-center items-center space-x-3">
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

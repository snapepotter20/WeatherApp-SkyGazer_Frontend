import React from "react";

const UsageGuide = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-[60%] mx-auto my-10 p-10 flex flex-col items-start justify-center gap-10 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 rounded-lg text-2xl text-white">
        <span>
          This is a user guide for using this application for better user
          experience.
        </span>
        <span>
          This application provides real time weather data of the location.
        </span>
        <span>
          To search for weather of a location there are two options
          available.One is to search by entering location name and other is
          entering coordinates (latitude and longitude).
        </span>
      </div>
    </div>
  );
};

export default UsageGuide;

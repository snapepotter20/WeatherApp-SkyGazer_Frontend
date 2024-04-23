import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-[60%] mx-auto my-10 p-10 flex flex-col items-start justify-center gap-10 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 rounded-lg text-2xl text-white">
        <span>
          This is SkyGazer, a weather application developed using REACT, NodeJS, and Tailwind CSS. SkyGazer allows users to access real-time weather data by searching with either place names or coordinates (latitude and longitude).
        </span>
        <span>
          The application integrates two open-source APIs for its functionality. Geoapify is used to convert place names to coordinates or vice versa, while Accuweather API provides detailed weather data based on coordinates.
        </span>
        <span>
          SkyGazer follows best practices in both frontend and backend development. It's a MERN stack application, offering comprehensive weather data solutions. Future enhancements and user-friendly features can be easily incorporated to improve the application's functionality and usability.
        </span>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Container from "./Container";
import { TempCard } from "../../components";

const Hero = (props) => {
  const {
    setLat,
    setLon,
    lat,
    lon,
    searchWeather,
    locationName,
    weather,
    loading,
    searchOption,
    handleSearchOption,
    place,
    setPlace
  } = props;
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-[70%] my-10">
        <div
          className={`w-full md:w-[30%] border p-3 rounded-lg cursor-pointer text-center font-semibold text-white ${
            searchOption === "coordinates"
              ? "border-blue-500 bg-blue-400"
              : "border-gray-300 bg-gray-400"
          }`}
          onClick={() => handleSearchOption("coordinates")}
        >
          <span>Search with coordinates</span>
        </div>
        <div
          className={`w-full md:w-[30%] border p-3 rounded-lg cursor-pointer text-center font-semibold text-white ${
            searchOption === "location"
              ? "border-blue-500 bg-blue-400"
              : "border-gray-300 bg-gray-400"
          }`}
          onClick={() => handleSearchOption("location")}
        >
          <span>Search with location</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-16 w-full">
        {searchOption === "location" ? (
          <div className="flex items-center justify-center my-3 w-[70%] md:w-[35%] text-gray-600 rounded-xl">
            <input
              type="text"
              className=" rounded-xl p-2 border border-gray-400 w-full md:w-[75%]"
              placeholder="Enter place. eg: Bangalore"
              name="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center m-3 gap-4 w-[60%] text-gray-600 rounded-xl">
            <input
              type="text"
              className=" rounded-xl p-2 border border-gray-400 w-full md:w-[50%]"
              placeholder="Enter Latitude. eg: 50.1109"
              name="Latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              type="text"
              className=" rounded-xl p-2 border border-gray-400 w-full md:w-[50%]"
              placeholder="Enter Longitude. eg: 8.6821"
              name="Longitude"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
            />
          </div>
        )}

        <div className="flex justify-center">
          <button
            className="flex items-center justify-center gap-4 p-2 px-4 my-4 bg-blue-500 rounded-3xl hover:bg-blue-400"
            onClick={searchWeather}
          >
            <span className="text-white">Search</span>
            <lord-icon
              src="https://cdn.lordicon.com/fkdzyfle.json"
              trigger="hover"
              fill="white"
            ></lord-icon>
          </button>
        </div>
      </div>
      {loading ? (
        <lord-icon
          src="https://cdn.lordicon.com/jpgpblwn.json"
          trigger="loop"
          style={{ width: "100px", height: "100px" }}
        ></lord-icon>
      ) : (
        <TempCard locationName={locationName} weather={weather} />
      )}
    </div>
  );
};

export default Container(Hero);

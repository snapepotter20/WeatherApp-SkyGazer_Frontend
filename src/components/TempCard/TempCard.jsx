import React, { useState, useEffect } from "react";

const TempCard = ({ locationName, weather }) => {
  // console.log("weather.main", weather?.main);

  const [temperature, setTemperature] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");

  useEffect(() => {
    setTemperature(Math.floor(weather?.main?.temp - 273.15));
    setMinTemperature(Math.floor(weather?.main?.temp_min - 273.15));
    setMaxTemperature(Math.floor(weather?.main?.temp_max - 273.15));
  }, [weather]);

  return (
    <div className="w-[90%] mb-10">
      <div className="mt-8 text-blue-500 text-semibold flex items-center justify-center gap-2">
        <span className="text-[30px]">Weather for</span>
        {locationName ? (
          <div className="flex items-center justify-center gap-4">
          <span className="text-[30px]">
            {locationName}
          </span>
          <img src="/assets/clouds.png" alt="weather"/>
          </div>
        ) : (
          // <lord-icon
          //   src="https://cdn.lordicon.com/ojnjgkun.json"
          //   trigger="hover"
          // ></lord-icon>
          <img src="/assets/user.png" alt="user" />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col items-center justify-start shadow-xl rounded-lg p-3 w-full h-[250px] m-auto mt-10 bg-gray-100 border border-gray-300">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-[40px] text-blue-500 font-semibold">
              {temperature} &deg;C
            </h1>
            <img src="/assets/temperature.png" alt="temperature"/>
          </div>
          <div className="my-2">
            <span className="text-xl">Temperature is {temperature} &deg;C</span>
          </div>
          <div className="my-2">
            <span className="text-xl">
              Min_Temperature is {minTemperature} &deg;C
            </span>
          </div>
          <div className="my-2">
            <span className="text-xl">
              Max_Temperature is {maxTemperature} &deg;C
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start shadow-xl rounded-lg p-3 w-full h-[250px] m-auto mt-10 bg-gray-100 border border-gray-300">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-[40px] text-blue-500 font-semibold">
              Pressure
            </h1>
            <img src="/assets/pressure.png" alt="pressure"/>
          </div>
          <div className="my-2">
            <span className="text-xl">
              Atmospheric Pressure {weather?.main?.pressure} hPa
            </span>
          </div>
          <div className="my-2">
            <span className="text-xl">
              Humidity {weather?.main?.humidity} %
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start shadow-xl rounded-lg p-3 w-full h-[250px] m-auto mt-10 bg-gray-100 border border-gray-300">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-[40px] text-blue-500 font-semibold">Wind</h1>
            <img src="/assets/wind.png" alt="wind"/>
          </div>
          <div className="my-2">
            <span className="text-xl">
              Wind speed {weather?.wind?.speed} meter/sec
            </span>
          </div>
          <div className="my-2">
            <span className="text-xl">Wind degree {weather?.wind?.deg} %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempCard;

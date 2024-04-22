import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = (Hero) => {
  return function Container() {
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [place, setPlace] = useState("");
    const [locationName, setLocationName] = useState("");
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(false);

    const searchWeather = async () => {
      setLoading(true);
      try {

        if (lat && lon) {
          const response = await fetch(
            // `http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`
            `https://weather-app-sky-gazer-backend.vercel.app/api/weather?lat=${lat}&lon=${lon}`
          );
          if (response) {
            const responseData = await response.json();
            console.log("responseData", responseData);
            setLoading(false);
            setLocationName(responseData.location);
            setWeather(responseData.weatherData);
            setLat("");
            setLon("");
          }
        }
         else {
            const response = await fetch(
              `https://weather-app-sky-gazer-backend.vercel.app/api/weather?place=${place}`
            );
            if (response) {
              const responseData = await response.json();
              console.log("responseData", responseData);
              setLoading(false);
              setLocationName(responseData.location);
              setWeather(responseData.weatherData);
              setPlace("");
            }
        }
      } catch (err) {
        toast.error("Something went wrong. Can't search weather.");
      }
    };

    const [searchOption, setSearchOption] = useState("coordinates");

    const handleSearchOption = (option) => {
      setSearchOption(option);
    };

    return (
      <>
        <Hero
          lat={lat}
          lon={lon}
          setLat={setLat}
          setLon={setLon}
          searchWeather={searchWeather}
          locationName={locationName}
          weather={weather}
          loading={loading}
          searchOption={searchOption}
          handleSearchOption={handleSearchOption}
          place={place}
          setPlace={setPlace}
        />
        <ToastContainer />
      </>
    );
  };
};

export default Container;

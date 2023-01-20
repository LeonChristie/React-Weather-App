import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Search from "./components/body/Search";
import CurrerntWeather from "./components/body/CurrentWeather";
import ForecastWeather from "./components/body/ForecastWeather";
import FiveDayWeather from "./components/body/FiveDayWeather";

function App() {
  const [location, setLocation] = useState();
  const [currentData, setCurrentData] = useState();
  const [forecastData, setForecastData] = useState();
  const [forecastIcons, setForecastIcons] = useState();


  useEffect(() => {
    const fetchCoords = async () => {
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b563241a6190e19f031c952fddaa7811`
      );
      const data = await geoRes.json();
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      const currentWeather = await currentRes.json();
      currentWeather.iconurl = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
      setCurrentData(currentWeather);
      console.log(currentWeather);
      const resFore = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      );
      const forecast = await resFore.json();

      setForecastData(forecast);
    };
    fetchCoords();
  }, [location]);

  // Submit Search
  const submitSearch = (place) => {
    setLocation(place);
  };

  return (
    <div className="container">
      <Search submitSearch={submitSearch}/>
      {typeof currentData != "undefined" ? (
        <CurrerntWeather currentData={currentData} />
      ) : (
        <div></div>
      )}
      {typeof forecastData != "undefined" ? (
        <ForecastWeather
          forecastData={forecastData}
          currentData={currentData}
        />
      ) : (
        <div></div>
      )}
      {typeof forecastData != "undefined" ? (
        <FiveDayWeather forecastData={forecastData} currentData={currentData} />
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
}

export default App;

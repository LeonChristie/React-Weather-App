import { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/body/Search";
import CurrerntWeather from "./components/body/CurrentWeather"

function App() {
  const [location, setLocation] = useState();
  const [currentData, setCurrentData] = useState();

  // make sure to hide API with key
  useEffect(() => {
    const fetchCoords = async () => {
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${WEATHER_API_KEY}`
      );
      const data = await geoRes.json();
      const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${WEATHER_API_KEY}`);
      const currentWeather = await currentRes.json();
      currentWeather.iconurl = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
      setCurrentData(currentWeather);
    };
    fetchCoords();
  }, [location]);



  // Submit Search
  const submitSearch = (place) => {
    setLocation(place);
  };

  return (
    <div className="container">
      <Header />
      <Search submitSearch={submitSearch} />
      {(typeof currentData != 'undefined') ? (
        <CurrerntWeather currentData={currentData} /> ):
        (<div></div>)}
      <Footer />
    </div>
  );
}

export default App;

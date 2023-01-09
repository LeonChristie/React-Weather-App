import { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/body/Search";

function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchCoords = async () => {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      return data;
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
      <Footer />
    </div>
  );
}

export default App;

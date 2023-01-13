const ForecastWeather = ({ forecastData, currentData }) => {
  const addIcons = forecastData.list.map((x) => ({
    ...x,
    iconurl: `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`,
  }));
  console.log(addIcons);

  return (
    <div className="forecast-display weather-components mx-auto mt-2">
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (forecastData.list[0].dt + currentData.timezone) * 1000
          ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
        </p>
        <img className="icon" width="100px" src={addIcons[0].iconurl} alt="" />
        <p className="temp">{forecastData.list[0].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (forecastData.list[1].dt + currentData.timezone) * 1000
          ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
        </p>
        <img width="100px" src={addIcons[1].iconurl} alt="" />
        <p className="temp">{forecastData.list[1].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (forecastData.list[2].dt + currentData.timezone) * 1000
          ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
        </p>
        <img width="100px" src={addIcons[2].iconurl} alt="" />
        <p className="temp">{forecastData.list[2].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (forecastData.list[3].dt + currentData.timezone) * 1000
          ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
        </p>
        <img width="100px" src={addIcons[3].iconurl} alt="" />
        <p className="temp">{forecastData.list[3].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (forecastData.list[4].dt + currentData.timezone) * 1000
          ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
        </p>
        <img width="100px" src={addIcons[4].iconurl} alt="" />
        <p className="temp">{forecastData.list[4].main.temp} &deg;C</p>
      </div>
    </div>
  );
};

export default ForecastWeather;

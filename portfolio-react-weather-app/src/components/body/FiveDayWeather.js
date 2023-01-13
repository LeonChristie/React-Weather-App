const FiveDayWeather = ({ forecastData, currentData }) => {
  const addIcons = forecastData.list.map((x) => ({
    ...x,
    iconurl: `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`,
  }));
  console.log(addIcons);

  const addLocalTime = addIcons.map((x) => ({
    ...x,
    local_time: new Date((x.dt + currentData.timezone) * 1000)
      .toISOString()
      .split("T")[1]
      .slice(0, 8),
  }));
  console.log(addLocalTime);

  const middayLocal = addLocalTime.filter(function (x) {
    return (
      x.local_time === "12:00:00" ||
      x.local_time === "12:30:00" ||
      x.local_time === "13:00:00" ||
      x.local_time === "13:30:00" ||
      x.local_time === "14:00:00" ||
      x.local_time === "14:30:00"
    );
  });
  console.log(middayLocal);

  return (
    <div className="forecast-display weather-components mx-auto my-2 mb-5">
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (middayLocal[0].dt + currentData.timezone) * 1000
          ).toLocaleDateString("en-GB", { month: "short", day: "numeric" })}
        </p>
        <img
          className="icon"
          width="100px"
          src={middayLocal[0].iconurl}
          alt=""
        />
        <p className="temp">{middayLocal[0].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (middayLocal[1].dt + currentData.timezone) * 1000
          ).toLocaleDateString("en-GB", { month: "short", day: "numeric" })}
        </p>
        <img width="100px" src={middayLocal[1].iconurl} alt="" />
        <p className="temp">{middayLocal[1].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (middayLocal[2].dt + currentData.timezone) * 1000
          ).toLocaleDateString("en-GB", { month: "short", day: "numeric" })}
        </p>
        <img width="100px" src={middayLocal[2].iconurl} alt="" />
        <p className="temp">{middayLocal[2].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (middayLocal[3].dt + currentData.timezone) * 1000
          ).toLocaleDateString("en-GB", { month: "short", day: "numeric" })}
        </p>
        <img width="100px" src={middayLocal[3].iconurl} alt="" />
        <p className="temp">{middayLocal[3].main.temp} &deg;C</p>
      </div>
      <div className="forecast">
        <p className="time-date">
          {new Date(
            (middayLocal[4].dt + currentData.timezone) * 1000
          ).toLocaleDateString("en-GB", { month: "short", day: "numeric" })}
        </p>
        <img width="100px" src={middayLocal[4].iconurl} alt="" />
        <p className="temp">{middayLocal[4].main.temp} &deg;C</p>
      </div>
    </div>
  );
};

export default FiveDayWeather;

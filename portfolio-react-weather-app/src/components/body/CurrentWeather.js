const CurrentWeather = ({ currentData }) => {
  return (
    <div className="mt-4 weather-components mx-auto">
      <div className="row py-2">
        <div className="col location">
          <p className="fs-2 ">
            {currentData.name}, {currentData.sys.country}
          </p>
        </div>
        <div className="row  align-items-end mx-auto">
          <div className="col-12 col-sm-4 today">
            <img src={currentData.iconurl} alt="" />
            <p className="fs-5">
              {currentData.weather[0].main},{" "}
              {currentData.weather[0].description}
            </p>
          </div>
          <div className="col-6 col-sm-4 text-center">
            <p className="temp-now">{currentData.main.temp} &deg;C</p>
            <p className="current-bottom">
              Feels Like: {currentData.main.feels_like} &deg;C
            </p>
          </div>
          <div className="col-6 col-sm-4 text-center">
            <p className="fs-5">
              <span>
                <img width="20px" src="sunrise-fill-svgrepo-com.svg" alt="" />
              </span>{" "}
              {new Date(
                (currentData.sys.sunrise + currentData.timezone) * 1000
              ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
            </p>
            <p className="fs-5">
              <span>
                <img width="20px" src="sunset-fill-svgrepo-com.svg" alt="" />
              </span>{" "}
              {new Date(
                (currentData.sys.sunset + currentData.timezone) * 1000
              ).toLocaleTimeString("en-GB", { timeStyle: "short" })}
            </p>
            <p className="current-bottom">
              Wind Speed: {Math.round(currentData.wind.speed * 2.237)}mph
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

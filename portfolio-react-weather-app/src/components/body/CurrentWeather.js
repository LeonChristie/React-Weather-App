const CurrentWeather = ({currentData}) => {
    console.log(currentData);
  return (
    <div className="mt-4 current-weather mx-auto">

      <div className="row py-2">
        <div className="col location">
            <p className="fs-1 ">{currentData.name}, {currentData.sys.country}</p>
        </div>
        <div className="col date">
            <p className="fs-1">{new Date(currentData.dt*1000).toLocaleDateString('en-GB')}</p>
        </div>

        <div className="row">
            <div className="col">
                    <img width="200px" src={currentData.iconurl} alt="" />
                <p className="fs-3">{currentData.weather[0].main}, {currentData.weather[0].description}</p>
            </div>
            <div className="col text-start my-auto ps-5">
                <p className="fs-4">Temperature: {currentData.main.temp} &deg;C</p>
                <p className="fs-4">Feels Like: {currentData.main.feels_like} &deg;C</p>
                <p className="fs-4">Wind Speed: {Math.round((currentData.wind.speed*2.237))}mph</p>
            </div>
            <div className="col px-5 text-start my-auto">
                <p className="fs-4">Sunrise: {new Date(currentData.sys.sunrise*1000).toLocaleTimeString('en-GB', {timeStyle:'short'})}</p>
                <p className="fs-4">Sunset: {new Date(currentData.sys.sunset*1000).toLocaleTimeString('en-GB', {timeStyle:'short'})}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather

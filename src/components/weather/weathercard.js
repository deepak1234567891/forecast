import React, { useEffect } from "react";

const WeatherCard  = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
    
    <div className="container d-flex justify-content-center align-items-center  vh-50">
      <div className="card w-100">
        <div className="card-body">
          <div className="d-flex justify-content-center align-items-center">
            <i className={`wi ${weatherState} display-1`}></i>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="temperature display-4">{temp}&deg;</div>
          </div>
          <div className="text-center">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place display-8">
              {name}, {country}
            </div>
          </div>
          <div className="date mt-3">{new Date().toLocaleString()}</div>
          <div className="extra-temp mt-3 ">
            <div className="row">
              <div className="col">
                <i className="wi wi-sunset"></i>
                <p className="extra-info-leftside text-primary">
                  {timeStr} PM <br />
                  Sunset
                </p>
              </div>
              <div className="col">
                <i className="wi wi-humidity"></i>
                <p className="extra-info-leftside text-primary">
                  {humidity} <br />
                  Humidity
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <i className="wi wi-rain"></i>
                <p className="extra-info-leftside text-primary">
                  {pressure} <br />
                  Pressure
                </p>
              </div>
              <div className="col">
                <i className="wi wi-strong-wind"></i>
                <p className="extra-info-leftside text-primary">
                  {speed} <br />
                  Speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WeatherCard;


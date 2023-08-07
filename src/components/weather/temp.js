import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Temp = () => {
  // ... (existing code remains the same)
  const [searchValue, setSearchValue] = useState("chitradurga");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async (cityName) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4aa29aaa966c5214fe9816758290bc20`;

        
      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
        getWeatherInfo(searchValue);
      }, [searchValue]);
    

  return (
    <>
    <div className="header">
    <h1 style={{fontFamily:"fantasy"}}>dPv </h1>
    <h6 style={{fontFamily:"cursive",color:"white"}}>Weather Condition</h6>
    </div>

     <div className="container d-flex justify-content-center align-items-center">
    <div className="row">
    <div className="col-md-6 mx-auto mb-2 ">
      <div className="input-group mb-5 ">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          id="search"
          className="form-control searchTerm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => getWeatherInfo(searchValue)}
        >
          Search
        </button>
      </div>
    </div>
  </div>
</div>



       <Weathercard {...tempInfo} />

  
</>
    
  
  );
};

export default Temp;

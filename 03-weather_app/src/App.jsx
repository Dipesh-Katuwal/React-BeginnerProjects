import "./App.css";
import GetCity from "./components/GetCity";
import WeatherCard from "./components/WatherCard";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Kathmandu");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=>{
    if (!city.trim()) {
        setError("Please enter a city name");
        return;
      }
  
      setError("");
  
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city.trim(),
        )}`
      ).then(res => res.json()).then(place=>{
        if (!place.results || place.results.length === 0) {
        setError("City not found");
        return;
      }

        const result = place.results?.[0];
        fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current_weather=true&temperature_unit=celsius&hourly=relative_humidity_2m&hourly=apparent_temperature`,
      ).then(res=> res.json()).then(weaData => {
        console.log(weaData)
        setWeather(weaData)
      })
      })
  },[city])

  return (
    <div className="appborder">
      <GetCity setCity={setCity}/>
      <WeatherCard weather={weather} city={city}/>
    </div>
  );
}

export default App;

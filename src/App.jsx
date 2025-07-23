import React, { useState, useEffect } from "react";
import Cont1 from "./components/Cont1";
import Cont2 from "./components/Cont2";
import Cont3 from "./components/Cont3";

function App() {
  const [city, setCity] = useState("Puebla");
  const [weatherData, setWeatherData] = useState(null);

  // Función para obtener datos del clima con la API
  const fetchWeatherData = async (cityName) => {
    try {
      // Usa tu API key y la URL correspondiente
      const apiKey = "e93f6c7fe271ee903820f8bac03cbd8b";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Ciudad no encontrada");
      const data = await res.json();

      setWeatherData(data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  // Cuando cambia la ciudad, obtiene datos
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <div className="md:flex min-h-screen">
      <Cont1 city={city} setCity={setCity} weatherData={weatherData} />
      <div className="flex-1">
        <Cont2 weatherData={weatherData} />
        <Cont3 weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Cont1 from "./components/Cont1";
import Cont2 from "./components/Cont2";
import Cont3 from "./components/Cont3";

function App() {
  const [city, setCity] = useState("Puebla");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  /* para el uso del os botones f y c */
  const [unit, setUnit] = useState("metric"); 

  const apiKey = "e93f6c7fe271ee903820f8bac03cbd8b";

  // Datos de clima actual
  const fetchWeatherData = async (cityName) => {
    try {
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

  // pronóstico para 5 días
  const fetchForecastData = async (cityName) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se pudo obtener el pronóstico");
    const data = await res.json();
    const grouped = {};
    data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(item);
    });

    // arreglo de días con min y max reales
    const dailyForecast = Object.keys(grouped).map((date) => {
      const entries = grouped[date];
      const max = Math.max(...entries.map(e => e.main.temp_max));
      const min = Math.min(...entries.map(e => e.main.temp_min));
      const icon = entries[4]?.weather[0].icon || entries[0].weather[0].icon;
      const description = entries[4]?.weather[0].description || "";

      return {
        dt_txt: date,
        main: { temp_max: max, temp_min: min },
        weather: [{ icon, description }],
      };
    });
    setForecastData(dailyForecast.slice(1, 6));

  } catch (error) {
    console.error(error);
    setForecastData([]);
  }
};


  useEffect(() => {
    fetchWeatherData(city);
    fetchForecastData(city);
    fetchWeatherData(city);
  }, [city,unit]);
  /* funcion para usar locaclizacion de ip */
  const fetchCityFromIP = async () => {
  try {
    const res = await fetch("https://ipinfo.io/json?token=aa900240f59a87");
    const data = await res.json();
    if (data && data.city) {
      setCity(data.city); // Esto dispara fetchWeatherData desde el useEffect
    } else {
      console.error("No se pudo obtener ciudad desde IP");
    }
  } catch (error) {
    console.error("Error al obtener ubicación por IP", error);
  }
};
  

  return (
    <div className="md:flex min-h-screen">
        <Cont1
        city={city}
        setCity={setCity}
        weatherData={weatherData}
        onUseMyLocation={fetchCityFromIP}
      />
      <div className="flex-1">
        <Cont2
        forecastData={forecastData}
        unit={unit}
        setUnit={setUnit}
      />
        <Cont3 weatherData={weatherData} unit={unit} />
      </div>
    </div>
  );
}

export default App;

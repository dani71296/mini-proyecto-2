import React, { useState } from "react";
import SearchModal from "./SearchModal";


function Cont1({ city, setCity, weatherData, onUseMyLocation }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative w-full min-h-screen md:w-[30%] bg-[#1E213A] overflow-hidden">
      
      {/* Imagen de fondo (encima del color) */}
      <div className="absolute inset-0 z-0 bg-no-repeat opacity-20 " style={{ backgroundImage: "url('/others/Cloud-background.png')" }}></div>
      {/* Modal */}
      {showModal && (
        <SearchModal
          onClose={() => setShowModal(false)}
          onSelectCity={(selectedCity) => {
            setCity(selectedCity);
            setShowModal(false);
          }}
        />
      )}
      {/* Contenido con fondo color + imagen detrás */}
      <div className="relative z-10 flex flex-col justify-between text-white p-6 min-h-screen">
        {/* Botones arriba */}
        <div className="flex justify-between">
          <button className="bg-gray-500/40 px-4 py-2 text-sm hover:bg-gray-600 transition"
            onClick={() => setShowModal(true)}
          >
            Search for places
          </button>
          <button className="bg-gray-500/40 p-2 rounded-full hover:bg-gray-600 transition"
            onClick={onUseMyLocation}
          >
            📍
          </button>
        </div>

        {/* Mostrar datos del clima y ciudad */}
        <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
          {weatherData ? (
            <>
              {/* Aquí pondremos la lógica para mostrar la imagen según el clima */}
              <img
                src={getWeatherIcon(weatherData.weather[0].icon)}
                alt={weatherData.weather[0].description}
                className="w-32 h-32"
              />
              <h1 className="text-6xl font-bold">{Math.round(weatherData.main.temp)}°C</h1>
              <p className="text-xl text-gray-300">{weatherData.weather[0].description}</p>
              <p className="text-sm text-gray-400">
                Today • {new Date().toLocaleDateString(undefined, {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                📍 <span>{city}</span>
              </div>
            </>
          ) : (
            <p>Cargando clima...</p>
          )}
        </div>
      </div>
      
    </div>
  );
  
}
function getWeatherIcon(iconCode) {
  return `/weather/${iconCode}.png`; // Debes tener esas imágenes en public/weather-icons
}
export default Cont1;



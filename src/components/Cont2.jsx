import React from "react";

function Cont2({ forecastData, unit, setUnit }) {
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" }); // Ej: "Thu"
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="bg-[#100E1D] text-white py-10 px-6 md:px-12">
      {/* Botones °C / °F */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={() => handleUnitChange("metric")}
          className={`rounded-full px-4 py-1 font-bold ${
            unit === "metric" ? "bg-white text-black" : "bg-gray-700"
          }`}
        >
          °C
        </button>
        <button
          onClick={() => handleUnitChange("imperial")}
          className={`rounded-full px-4 py-1 font-bold ${
            unit === "imperial" ? "bg-white text-black" : "bg-gray-700"
          }`}
        >
          °F
        </button>
      </div>

      {/* Forecast Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <div key={index} className="bg-[#1E213A] p-4 text-center">
            <p className="mb-2">{getDayName(day.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p className="mt-2">
              {Math.round(day.main.temp_max)}{unitSymbol} / {Math.round(day.main.temp_min)}{unitSymbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cont2;


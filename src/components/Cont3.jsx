import React from 'react';

function getWindDirection(degree) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

function Cont3({ weatherData, unit }) {
  if (!weatherData) return null;

  const windSpeed =
    unit === 'metric'
      ? `${weatherData.wind.speed} m/s`
      : `${(weatherData.wind.speed * 2.237).toFixed(1)} mph`;

  const visibility =
    unit === 'metric'
      ? `${(weatherData.visibility / 1000).toFixed(1)} km`
      : `${(weatherData.visibility / 1609).toFixed(1)} miles`;

  const pressure =
    unit === 'metric'
      ? `${weatherData.main.pressure} mb`
      : `${(weatherData.main.pressure * 0.02953).toFixed(2)} inHg`;

  return (
    <div className="bg-[#100E1D] text-white px-6 py-10 md:px-12">
      <h2 className="text-xl font-semibold mb-8 text-center md:text-left">Today’s Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Wind Status */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start">
          <p className="mb-2">Wind Status</p>
          <h3 className="text-4xl font-bold mb-2">{windSpeed}</h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="rotate-45 bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full text-black">
              ➤
            </div>
            <span className="text-sm">{getWindDirection(weatherData.wind.deg)}</span>
          </div>
        </div>

        {/* Card 2 - Humidity */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start w-full">
          <p className="mb-2">Humidity</p>
          <h3 className="text-4xl font-bold mb-4">{weatherData.main.humidity}%</h3>
          <div className="w-full">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="w-full bg-gray-600 h-2 rounded">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${weatherData.main.humidity}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Card 3 - Visibility */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start">
          <p className="mb-2">Visibility</p>
          <h3 className="text-4xl font-bold">{visibility}</h3>
        </div>

        {/* Card 4 - Air Pressure */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start">
          <p className="mb-2">Air Pressure</p>
          <h3 className="text-4xl font-bold">{pressure}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cont3;


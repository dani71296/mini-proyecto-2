import React from 'react';

function getWindDirection(degree) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

function Cont3({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div className="bg-black text-white px-6 py-10 md:px-12">
      <h2 className="text-xl font-semibold mb-8 text-center md:text-left">Today’s Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Wind Status */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start">
          <p className="mb-2">Wind Status</p>
          <h3 className="text-4xl font-bold mb-2">
            {weatherData.wind.speed} <span className="text-xl font-light">m/s</span>
          </h3>
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
          <h3 className="text-4xl font-bold">
            {weatherData.visibility / 1000} <span className="text-xl font-light">km</span>
          </h3>
        </div>

        {/* Card 4 - Air Pressure */}
        <div className="bg-[#1E213A] p-6 flex flex-col items-center md:items-start">
          <p className="mb-2">Air Pressure</p>
          <h3 className="text-4xl font-bold">
            {weatherData.main.pressure} <span className="text-xl font-light">mb</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cont3;


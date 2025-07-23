import React from 'react';

function Cont1() {
  return (
    <div
      className="
        w-full 
        min-h-screen 
        text-white 
        flex flex-col 
        justify-between 
        bg-cover 
        bg-center 
        bg-no-repeat 
        p-6 
        md:w-[30%] md:min-h-screen
      "
      style={{ backgroundImage: "url('/assets/img1.jpg')" }}
    >
      {/* Botones arriba */}
      <div className="flex justify-between">
        <button className="bg-gray-500/40 px-4 py-2 text-sm hover:bg-gray-600 transition">
          Search for places
        </button>
        <button className="bg-gray-500/40 p-2 rounded-full hover:bg-gray-600 transition">
          📍
        </button>
      </div>

      {/* Contenido central */}
      <div className="flex flex-col items-center gap-6 mt-10 md:mt-0">
        <img src="/assets/img1.png" alt="weather icon" className="w-32 h-32" />
        <h1 className="text-6xl font-bold">18°C</h1>
        <p className="text-xl text-gray-300">Few Clouds</p>
        <p className="text-sm text-gray-400">Today • Wed, 23 Jul</p>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          📍 <span>Puebla, MX</span>
        </div>
      </div>
    </div>
  );
}

export default Cont1;


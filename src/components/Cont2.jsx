import React from 'react';

function Cont2() {
  return (
    <div className="bg-black text-white px-6 py-8 md:px-12 md:py-10">
      {/* Botones °C y °F */}
      <div className="flex justify-end gap-2 mb-8">
        <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 font-semibold">°C</button>
        <button className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 font-semibold">°F</button>
      </div>

      {/* Cards de pronóstico */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Card 1 */}
        <div className="bg-[#1E213A] p-4 flex flex-col items-center">
          <p className="mb-2">Tomorrow</p>
          <img src="/assets/img2.png" alt="weather" className="w-14 h-14" />
          <div className="mt-2 text-sm">
            <span>29°C</span> / <span>18°C</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1E213A] p-4 flex flex-col items-center">
          <p className="mb-2">Thu, 24 Jul</p>
          <img src="/assets/img3.png" alt="weather" className="w-14 h-14" />
          <div className="mt-2 text-sm">
            <span>25°C</span> / <span>12°C</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1E213A] p-4 flex flex-col items-center">
          <p className="mb-2">Fri, 25 Jul</p>
          <img src="/assets/img4.png" alt="weather" className="w-14 h-14" />
          <div className="mt-2 text-sm">
            <span>22°C</span> / <span>10°C</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1E213A] p-4 flex flex-col items-center">
          <p className="mb-2">Sat, 26 Jul</p>
          <img src="/assets/img5.png" alt="weather" className="w-14 h-14" />
          <div className="mt-2 text-sm">
            <span>24°C</span> / <span>13°C</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#1E213A] p-4 flex flex-col items-center">
          <p className="mb-2">Sun, 27 Jul</p>
          <img src="/assets/img6.png" alt="weather" className="w-14 h-14" />
          <div className="mt-2 text-sm">
            <span>28°C</span> / <span>16°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cont2;

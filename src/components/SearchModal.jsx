import React, { useState } from "react";
import cities from "../data/cities.json"; // Asegúrate que exista el archivo en src/data

function SearchModal({ onClose, onSelectCity }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 3)); // Solo los 3 primeros
  };

  return (
    <div className="absolute inset-0 bg-[#1E213A] text-white p-6 z-20 flex flex-col gap-6">
      <button className="self-end text-xl" onClick={onClose}>✖</button>

      <div className="flex items-center gap-2">
        <img src="/search.svg" alt="search" className="w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location"
          className="bg-gray-700 px-3 py-2 w-full outline-none"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {results.map((city, index) => (
          <div
            key={index}
            className="py-2 px-4 cursor-pointer border border-transparent hover:border-white"
              onClick={() => {
                onSelectCity(city.name);
                onClose();
                }}
            >
            {city.name}, {city.country_code.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchModal;


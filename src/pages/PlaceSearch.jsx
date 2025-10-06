import React, { useState } from "react";

const PlaceSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchPlaces = async (q) => {
    setQuery(q);
    if (q.length > 2) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${q} Andhra Pradesh, India`;

      const res = await fetch(url, {
        headers: {
          "User-Agent": "WanderHubApp/1.0 (test@example.com)",
          "Accept-Language": "en",
        },
      });

      const data = await res.json();
      console.log("API results:", data);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div
      style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial" }}
    >
      <h1>🌍 Andhra Pradesh Search</h1>
      <input
        type="text"
        placeholder="Search for a place in Andhra Pradesh..."
        value={query}
        onChange={(e) => searchPlaces(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.length > 0
          ? results.map((place, index) => (
              <li
                key={index}
                style={{
                  padding: "8px",
                  marginBottom: "5px",
                  border: "1px solid #eee",
                  borderRadius: "6px",
                  background: "#f9f9f9",
                }}
              >
                {place.display_name}
              </li>
            ))
          : query.length > 2 && <li>No places found</li>}
      </ul>
    </div>
  );
};

export default PlaceSearch;

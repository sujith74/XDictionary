import React, { useState } from "react";

const App = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const entry = dictionary.find((item) => item.word.toLowerCase() === query.toLowerCase());
    setResult(entry ? entry.meaning : "Word not found in the dictionary.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", width: "300px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <div>
        <strong>Definition:</strong> <span>{result}</span>
      </div>
    </div>
  );
};

export default App;

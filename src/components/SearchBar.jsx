import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const minTitleLength = 2;
  const fetchData = (value) => {
    console.log(value);
    if (value.length >= minTitleLength) {
      const encodedValue = encodeURIComponent(value);
      const url = `https://verifee-api.azure-api.net/verifee/search?query=${encodedValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((article) => {
            return value && article && article.title;
          });
          setResults(results);
          console.log(results);
        });
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Zadejte titulek nebo adresu webu pro analýzu"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

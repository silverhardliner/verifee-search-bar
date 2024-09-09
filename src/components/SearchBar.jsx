import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const minTitleLength = 2;

  useEffect(() => {
    fetchData(input);
  }, [input]);

  const fetchData = (value) => {
    if (value.length >= minTitleLength) {
      const encodedValue = encodeURIComponent(value);
      const url = `https://verifee-api.azure-api.net/verifee/search?query=${encodedValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter(
            (article) => value && article && article.title
          );

          console.log("Filled");

          if (results.length === 0) {
            setResults([{title : "Nenašli jsme žádný článek."}]);
          } else {
            setResults(results);
          }
        });
    } else {
      console.log("Empty");
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value); // Update input immediately
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

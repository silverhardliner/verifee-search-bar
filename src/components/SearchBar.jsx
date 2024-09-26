import React, { useState, useEffect } from "react";
import { Cross, Search } from "akar-icons";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const minTitleLength = 2;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const delayDebounceFn = setTimeout(() => {
      fetchData(input, signal);
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
      controller.abort();
    };
  }, [input]);

  function showLoadingResult() {
    setResults([{ title: "Hledáme odpovídající články.", loading: true }]);
  }

  function handleResults(results) {
    if (results.length === 0) {
      setResults([{ title: "Nenašli jsme žádný článek." }]);
    } else {
      setResults(results);
    }
  }

  const fetchData = (value, signal) => {
    if (value.length >= minTitleLength) {
      showLoadingResult();

      const encodedValue = encodeURIComponent(value);
      const url = `https://verifee-api.azure-api.net/verifee/search?query=${encodedValue}`;

      fetch(url, { signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response;
        })
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter(
            (article) => value && article && article.title
          );
          handleResults(results);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            // Fetch aborted for input; no need to log this in production
            //console.log("Fetch aborted for input: ", value);
          } else {
            // Fetch error occurred; handling it silently
            //console.error("Fetch error: ", error);
          }
        });
    } else {
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value); // Update input immediately
  };

  return (
    <div className="input-wrapper">
      <Search id="search-icon" strokeWidth={2} size={20} />
      <input
        placeholder="Zadejte titulek nebo adresu webu pro analýzu"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <div className="circle">
        <Cross
          strokeWidth={2}
          size={20}
          id="cross-icon"
          onClick={() => handleChange("")}
        />
      </div>
    </div>
  );
};

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
      // Send Axios request here
      console.log(`Fetching for '${input}'`);
      fetchData(input, signal);
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
      controller.abort();
    };
    //console.log(`Fetching for '${input}'`);
    //fetchData(input);
  }, [input]);

  function handleResults(results) {
    if (results.length === 0) {
      setResults([{ title: "Nenašli jsme žádný článek." }]);
    } else {
      setResults(results);
    }
  }

  const fetchData = (value, signal) => {
    if (value.length >= minTitleLength) {
      let dataError = false;
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
            console.log("Fetch aborted for input: ", value);
          } else {
            console.error("Fetch error: ", error);
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

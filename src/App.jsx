import { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  function sendSize() {
    const searchContainer = document.querySelector(".search-bar-container");
    if (searchContainer) {
      const containerRect = searchContainer.getBoundingClientRect();
      const sendMsg = containerRect.bottom;
      window.parent.postMessage({ iframeHeight: sendMsg }, "*");
    }
  }

  useEffect(() => {
    sendSize();
  }, [results]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;

//Read
//https://webflow.com/blog/react-components-in-webflow

import { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const sendHeight = () => {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ iframeHeight: height }, "*");
  };

  useEffect(() => {
    sendHeight();
    window.addEventListener("resize", sendHeight);
    return () => {
      window.removeEventListener("resize", sendHeight);
    };
  }, []);

  const [results, setResults] = useState([]);

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

import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  let logTitle = "";
  if (results.length > 0) {
    logTitle = results[0].title.slice(0,10);
  }
  console.log(`Listing results of title ${logTitle}`);

  const numResults = 5;
  return (
    <div className="results-list">
      {results.slice(0, numResults).map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

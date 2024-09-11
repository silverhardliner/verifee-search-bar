import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  const numResults = 5;
  return (
    <div className="results-list">
      {results.slice(0, numResults).map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.slice(0,5).map((result, id) => {
        return <SearchResult result={result} key={id}/>;
      })}
    </div>
  );
};

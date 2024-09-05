import React from "react";

import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const verifeeAnalysis = `https://verifee.ai/analysis.html?url=${result.url}`;
  const date = result.article_published.substr(0, 10);
  return (
    <div
      className="search-result"
      onClick={() => window.open(verifeeAnalysis, "_blank")}
    >
      <img src={result.image_url} alt={result.title} />
      <div className="result-details">
        <h4>{result.title}</h4>
        <p>{date}</p>
        </div>
    </div>
  );
};

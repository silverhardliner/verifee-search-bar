import React from "react";

import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const verifeeAnalysis = `https://verifee.ai/analysis.html?url=${result.url}`;
  return (
    <div
      className="search-result"
      onClick={() => window.open(verifeeAnalysis, '_blank')}
    >
      {result.title.substr(0,60) + "\u2026"}
    </div>
  );
};

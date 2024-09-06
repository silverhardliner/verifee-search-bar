import React from "react";

import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  function convertDateToCzech(dateString) {
    const months = [
      "ledna",
      "února",
      "března",
      "dubna",
      "května",
      "června",
      "července",
      "srpna",
      "září",
      "října",
      "listopadu",
      "prosince",
    ];

    const [year, month, day] = dateString.split("-");

    const czechDate = `${parseInt(day)}. ${
      months[parseInt(month) - 1]
    } ${year}`;
    return czechDate;
  }

  const verifeeAnalysis = `https://verifee.ai/analysis.html?url=${result.url}`;
  const date = result.article_published.substr(0, 10);
  return (
    <div
      className="search-result"
      onClick={() => window.open(verifeeAnalysis, "_blank")}
    >
      <img src={result.image_url} alt={result.title} />
      <div className="result-details">
        <div className="result-title">{result.title}</div>
        <div className="result-date">{convertDateToCzech(date)}</div>
      </div>
    </div>
  );
};

import React from "react";
import { ImageIcon } from "./ImageIcon";

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

  function handleClick() {
    if (result.image_url) {
      window.open(verifeeAnalysis, "_blank");
    }
  }

  const verifeeAnalysis = `https://verifee.ai/analysis.html?url=${result.url}`;
  const date =
    result.article_published && result.article_published.substr(0, 10);
  return (
    <div className="search-result container-row" onClick={handleClick}>
      <ImageIcon result={result}/>
      <div className="result-details container-column">
        <div className="result-title">{result.title}</div>
        <div className="result-date">{date && convertDateToCzech(date)}</div>
      </div>
    </div>
  );
};

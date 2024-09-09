import React from "react";
import { ImFileEmpty } from "react-icons/im";

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
  const date =
    result.article_published && result.article_published.substr(0, 10);
  return (
    <div
      className="search-result"
      onClick={
        result.image_url
          ? () => window.open(verifeeAnalysis, "_blank")
          : () => {}
      }
    >
      {result.image_url ? (
        <img src={result.image_url} alt={result.title} />
      ) : (
        <ImFileEmpty id="empty-icon" />
      )}
      <div className="result-details">
        <div className="result-title">{result.title}</div>
        <div className="result-date">{date && convertDateToCzech(date)}</div>
      </div>
    </div>
  );
};

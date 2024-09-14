import React from "react";
import { ImFileEmpty } from "react-icons/im";

import "./ImageIcon.css";

export const ImageIcon = ({ result }) => {
  if (result.image_url) {
    return (
      <div className="img-cont"><img
        src={result.image_url}
        alt={result.title}
        loading="lazy"
        srcSet={`${result.image_url} 60w`}
        sizes="60px"
      /></div>
    );
  } else {
    return <ImFileEmpty id="empty-icon" />;
  }
};

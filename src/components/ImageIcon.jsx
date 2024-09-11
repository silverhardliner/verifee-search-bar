import React from "react";
import { ImFileEmpty } from "react-icons/im";

import "./ImageIcon.css";

export const ImageIcon = ({result}) => {
  if (result.image_url) {
    return <img src={result.image_url} alt={result.title} />;
  } else {
    return <ImFileEmpty id="empty-icon" />;
  }
};

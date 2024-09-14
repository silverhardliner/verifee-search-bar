import React from "react";
import { Download, Block } from "akar-icons";

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
  } else if (result.loading) {
    return <Download strokeWidth={2} size={20} />;
  } else {
    return <Block strokeWidth={2} size={20} />;
  }
};

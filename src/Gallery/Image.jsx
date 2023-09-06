import React from "react";

function Image({ src, alt }) {
  const handleShowImage = (e) => {
    e.target.classList.toggle("preview");
  };
  return (
    <div className="img-container">
      <img onClick={handleShowImage} src={src} alt={alt} />
    </div>
  );
}

export default Image;

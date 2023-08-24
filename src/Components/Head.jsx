import React from "react";

function Head() {
  const head = "My biography";
  const myName = "Tsiurupa Andrii";
  const born = "Was born: Country: Ukraine, town Mariupol, 1981year 15.07";
  const national = "National: Ukrainian";
  return (
    <div>
      <h1 style={{ color: "grey" }}>My biography</h1>
      <h2 style={{ color: "blue", background: "azure" }}>{myName}</h2>
      <p>{born}</p>
      <p>National: Ukrainian</p>
    </div>
  );
}

export default Head;

import React from "react";

function Sport() {
  const careers = [
    {
      id: 1,
      period: "1988-1999year",
      rank: "MS of Ukraine",
    },
    {
      id: 2,
      period: "1988-1999year",
      rank: "MS of Ukraine",
    },
    {
      id: 3,
      period: "1988-1999year",
      rank: "MS of Ukraine",
    },
  ];
  return (
    <div>
      {careers.map((career) => (
        <div key={careers.id}>
          <h style={{ color: "pink" }}>{career.period}</h>
          <p>{career.rank}</p>
        </div>
      ))}
    </div>
  );
}

export default Sport;

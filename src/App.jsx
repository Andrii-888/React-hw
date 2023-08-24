import React from "react";
import Head from "./Components/Head";
import Schools from "./Components/Schools";
import Sport from "./Components/Sport";
import Family from "./Components/Family";

function App() {
  const objSchool = {
    secondary: "GESc 1988-1998",
    university: "MGU 1998-2003",
    magister: "Collegium of advocates 2003-2005",
  };
  return (
    <div>
      <Head />
      <Schools schools={objSchool} />
      <Sport />
      <Family>
      <h2 style={{ color: "green", backgroundColor: "orange" }}>My family</h2>
      <ul>
      <li>wife: Maria , born 1991 01.20</li>
      <li>older daughter: Alexsandra , born 2010 05.11</li>
      <li>younger daughter: Yeva , born 2017 09.10</li>
      
      </ul>
      </Family>
    </div>
  );
}

export default App;

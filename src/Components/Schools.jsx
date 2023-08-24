import React from "react";

function Schools({ schools }) {
  return (
    <div>
    <h2>Education institutions</h2>
      <p style={{ color: "green", backgroundColor: "yellowgreen" }}>
        {schools.secondary}
      </p>
      <p style={{ color: "red", backgroundColor: "grey" }}>
        {schools.university}
      </p>
      <p style={{ color: "brown", backgroundColor: "violet" }}>
        {schools.magister}
      </p>
    </div>
  );
}

export default Schools;

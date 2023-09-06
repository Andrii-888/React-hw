import React, { useState } from "react";

function AddContactForm({ addContact }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({ ...inputs, id: Math.floor(Math.random() * 100) });
  };
  return (
    <div>
      <h3 style={{ color: "blue" }}>Make contact</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={inputs.name || ""}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          value={inputs.phone || ""}
          onChange={handleChange}
          type="tel"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input
          value={inputs.email || ""}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <button
          style={{
            color: "green",
            backgrounColor: "black",
            borderRadius: "20px",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddContactForm;

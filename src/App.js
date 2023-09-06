import React from "react";
import ContactBook from "./ContactBook/ContactBook";
import AddContactForm from "./ContactBook/ AddContactForm";
import Gallery from "./Gallery/Gallery";
import "./style.css";

function App() {
  return (
    <div>
    <ContactBook/>
      <Gallery />
    </div>
  );
}

export default App;

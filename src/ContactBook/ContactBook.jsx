import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContactForm from "./ AddContactForm";

function ContactBook() {
  const [contacts, setContact] = useState([]);
  const handleAddContact = (contact) => {
    setContact((contacts) => [...contacts, contact]);
  };
  return (
    <div>
      <ContactList list={contacts} />
      <AddContactForm addContact={handleAddContact} />
    </div>
  );
}

export default ContactBook;

import React from "react";
import ContactItem from "../contactItem/ContactItem.jsx";

const ContactList = ({ contacts, setContacts }) => {
  return (
    <ul>
      {contacts.map((contact, currentIndex) => (
        <ContactItem
          key={currentIndex}
          contact={contact}
          currentIndex={currentIndex}
          contacts={contacts}
          setContacts={setContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;

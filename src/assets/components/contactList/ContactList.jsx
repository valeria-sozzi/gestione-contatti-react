import React from "react";
import ContactItem from "../contactItem/ContactItem.jsx";

const ContactList = ({ contacts, setContacts, searchName }) => {
  return (
    <ul>
      {contacts?.map(
        (contact, currentIndex) =>
          contact.name.toLowerCase().includes(searchName.toLowerCase()) && (
            <ContactItem
              key={currentIndex}
              contact={contact}
              currentIndex={currentIndex}
              contacts={contacts}
              setContacts={setContacts}
            />
          )
      )}
    </ul>
  );
};

export default ContactList;

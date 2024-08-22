import React from "react";

const ContactItem = ({ currentIndex, contact, contacts, setContacts }) => {
  return (
    <li>
      {contact.name}, {contact.phone}, {contact.email}
      <span
        onClick={() => {
          const newContacts = [...contacts];
          newContacts.splice(currentIndex, 1);
          setContacts(newContacts);
        }}
      >
        {" "}
        X{" "}
      </span>
    </li>
  );
};

export default ContactItem;

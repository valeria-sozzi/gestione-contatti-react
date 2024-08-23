import React, { useState } from "react";

const ContactItem = ({ currentIndex, contact, contacts, setContacts }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [changeName, setChangeName] = useState(contact.name);
  const [changePhone, setChangePhone] = useState(contact.phone);
  const [changeEmail, setChangeEmail] = useState(contact.email);
  return (
    <li>
      {isEdit ? (
        <>
          <input
            type="text"
            value={changeName}
            onChange={(e) => setChangeName(e.target.value)}
          />
          <input
            type="text"
            value={changePhone}
            onChange={(e) => setChangePhone(e.target.value)}
          />
          <input
            type="text"
            value={changeEmail}
            onChange={(e) => setChangeEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          {contact.name}, {contact.phone}, {contact.email}
        </>
      )}
      {isEdit ? (
        <>
          <button
            onClick={() => {
              const newContacts = [...contacts];
              newContacts[currentIndex].name = changeName;
              newContacts[currentIndex].phone = changePhone;
              newContacts[currentIndex].email = changeEmail;
              setContacts(newContacts);
              setIsEdit(false);
            }}
          >
            Salva
          </button>
          <button onClick={() => setIsEdit(false)}>Annulla</button>
        </>
      ) : (
        <button onClick={() => setIsEdit(true)}>Modifica</button>
      )}

      <span
        onClick={() => {
          const newContacts = [...contacts];
          newContacts.splice(currentIndex, 1);
          setContacts(newContacts);
        }}
      >
        X
      </span>
    </li>
  );
};

export default ContactItem;

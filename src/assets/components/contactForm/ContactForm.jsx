import React, { useEffect, useState } from "react";

const ContactForm = ({ contacts, setContacts }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  useEffect(() => {
    if (
      inputNameValue !== "" &&
      inputNameValue !== "" &&
      inputEmailValue !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputNameValue, inputPhoneValue, inputEmailValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newContact = {
          name: inputNameValue,
          phone: inputPhoneValue,
          email: inputEmailValue,
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
        setInputNameValue("");
        setInputPhoneValue("");
        setInputEmailValue("");
      }}
    >
      <label>Inserisci Nome</label>
      <input
        type="text"
        value={inputNameValue}
        onChange={(e) => setInputNameValue(e.target.value)}
        required
      />
      <label>Inserisci Telefono</label>
      <input
        type="number"
        value={inputPhoneValue}
        onChange={(e) => setInputPhoneValue(e.target.value)}
        required
      />
      <label>Inserisci Email</label>
      <input
        type="email"
        value={inputEmailValue}
        onChange={(e) => setInputEmailValue(e.target.value)}
        required
      />
      <button type="submit" disabled={isButtonDisabled}>
        Aggiungi nuovo contatto
      </button>
    </form>
  );
};

export default ContactForm;

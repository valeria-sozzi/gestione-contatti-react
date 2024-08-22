import { useState } from "react";
import "./App.css";
import ContactForm from "./assets/components/contactForm/ContactForm.jsx";
import ContactList from "./assets/components/contactList/ContactList.jsx";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Mario Rossi", phone: "123456789", email: "mario@rossi.com" },
    { name: "Giulia Bianchi", phone: "987654321", email: "giulia@bianchi.com" },
  ]);

  return (
    <>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default App;

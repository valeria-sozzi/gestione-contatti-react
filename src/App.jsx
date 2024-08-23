import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./assets/components/contactForm/ContactForm.jsx";
import ContactList from "./assets/components/contactList/ContactList.jsx";
import SearchBar from "./assets/components/searchBar/SearchBar.jsx";

const initialValues = [
  { name: "Mario Rossi", phone: "123456789", email: "mario@rossi.com" },
  { name: "Giulia Bianchi", phone: "987654321", email: "giulia@bianchi.com" },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const contactsStorage = JSON.parse(localStorage.getItem("contactsStorage"));
    if (contactsStorage?.length > 0) {
      setContacts(contactsStorage);
    } else {
      setContacts(initialValues);
    }
  }, []);

  useEffect(() => {
    contacts?.length > 0 &&
      localStorage.setItem("contactsStorage", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <SearchBar searchName={searchName} setSearchName={setSearchName} />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        searchName={searchName}
      />
    </>
  );
}

export default App;

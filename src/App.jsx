import { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Mario Rossi", phone: "123456789", email: "mario@rossi.com" },
    { name: "Giulia Bianchi", phone: "987654321", email: "giulia@bianchi.com" },
  ]);

  return <></>;
}

export default App;

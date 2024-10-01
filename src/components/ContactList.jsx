import React from 'react';
import Contact from "./Contact";

export default function ContactList({contacts, deleteContact}) {
  return (
    <div>
      Contacts list:
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          deleteContact={deleteContact} />
      ))}
    </div>
  )
}

import React from 'react';
import Contact from "./Contact";

export default function ContactList({tasks, deleteContact}) {
  return (
    <div>
      Contacts list:
      {tasks.map((task) => (
        <Contact
          key={task.id}
          id={task.id}
          title={task.title}
          deleteContact={deleteContact} />
      ))}
    </div>
  )
}

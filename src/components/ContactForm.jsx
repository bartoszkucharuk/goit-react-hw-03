import React from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Form({addContact}) {
  const saveContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name } = form.elements;
    console.log(name.value);
    addContact({id: uuidv4(), name:name.value});
    form.reset();
  };

  return (
    <form onSubmit={saveContact}>
      <input type="text" name="name" />
      <button type="submit">Add contact</button>
    </form>
  )
}

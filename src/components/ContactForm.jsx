import React from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Form({addContact}) {
  const saveContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const { title } = form.elements;
    console.log(title.value);
    addContact({id: uuidv4(), title:title.value});
    form.reset();
  };

  return (
    <form onSubmit={saveContact}>
      <input type="text" name="title" />
      <button type="submit">Add contact</button>
    </form>
  )
}

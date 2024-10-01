import React from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Form({addTask}) {
  const saveTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const { title } = form.elements;
    console.log(title.value);
    addTask({id: uuidv4(), title:title.value});
    form.reset();
  };

  return (
    <form onSubmit={saveTask}>
      <input type="text" name="title" />
      <button type="submit">Add task</button>
    </form>
  )
}

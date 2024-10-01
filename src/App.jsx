import { useState } from 'react';
import './App.css';

import SearchBox from "./components/SearchBox"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"

const initialContacts = [
  {id: 'id-1', title: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', title: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', title: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', title: 'Annie Copeland', number: '227-91-26'},
];

function App() {
  const [tasks, setTasks] = useState(initialContacts);
  const [filter, setFilter] = useState("");


  const deleteContact = (id) => {
    console.log("delete contact", id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = newTask => {
    setTasks(prev => [...prev, newTask]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const visibleTasks = tasks.filter(task => task.title.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <>
      <ContactForm addTask={addTask} />
      <SearchBox handleFilterChange={handleFilterChange} value={filter} />
      <ContactList tasks={visibleTasks} deleteContact={deleteContact} />
    </>
  )
}

export default App

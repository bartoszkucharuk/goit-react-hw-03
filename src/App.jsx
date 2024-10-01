import { useState } from 'react';
import './App.css';

import SearchBox from "./components/SearchBox"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"

const initialTask = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
  { id: 5, title: "Task 5" },
];

function App() {
  const [tasks, setTasks] = useState(initialTask);
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

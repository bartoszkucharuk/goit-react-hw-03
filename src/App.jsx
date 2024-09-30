import { useState } from 'react';
import './App.css';

import Filter from "./components/Filter"
import Form from "./components/Form"
import TasksList from "./components/TasksList"

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


  const deleteTask = (id) => {
    console.log("delete task", id);
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
      {filter}
      <Form addTask={addTask} />
      <Filter handleFilterChange={handleFilterChange} value={filter} />
      <TasksList tasks={visibleTasks} deleteTask={deleteTask} />
    </>
  )
}

export default App

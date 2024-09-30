import { useState } from 'react';
import './App.css';

import Filter from "./components/Filter"
import Form from "./components/Form"
import Task from "./components/Task"
import TasksList from "./components/TasksList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Filter />
      <Form />
      <Task />
      <TasksList />
    </>
  )
}

export default App

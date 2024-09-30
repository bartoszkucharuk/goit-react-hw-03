import React from 'react';
import Task from "./Task";

export default function TasksList({tasks, deleteTask}) {
  return (
    <div>
      TasksList:
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          deleteTask={deleteTask} />
      ))}
    </div>
  )
}

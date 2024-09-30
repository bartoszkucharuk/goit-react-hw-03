import React from 'react'

export default function Task({title, deleteTask, id}) {
  return (
    <div>
    task title: {title}, ID: {id} <button onClick={() => deleteTask(id)}>delete</button>
    </div>
  )
}

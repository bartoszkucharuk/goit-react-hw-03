import React from 'react'

export default function Contact({name, number, deleteContact, id}) {
  return (
    <div>
      {name}<br />
      {number} ({id})
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}

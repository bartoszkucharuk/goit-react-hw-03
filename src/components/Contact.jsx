import React from 'react'

export default function Contact({name, deleteContact, id}) {
  return (
    <div>
    {name}, ID: {id} <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}

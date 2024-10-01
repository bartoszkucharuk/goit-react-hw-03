import React from 'react'

export default function Contact({title, deleteContact, id}) {
  return (
    <div>
    title: {title}, ID: {id} <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}

import React from 'react'

export default function Filter({value, handleFilterChange}) {
  return (
    <form>
      <label>
        Search: <br />
        <input type="text" value={value} onChange={handleFilterChange} />
      </label>

     </form>
  )
}

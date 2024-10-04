import React from 'react'
import styles from "./SearchBox.module.css";


export default function SearchBox({value, handleFilterChange}) {
  return (
    <form>
    <div>
      <label>
        Find contacts by name<br />
        <input type="text" value={value} onChange={handleFilterChange} />
      </label>
    </div>
     </form>
  )
}

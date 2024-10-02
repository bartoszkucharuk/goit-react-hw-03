import React from 'react';
import styles from "./Contact.module.css";

export default function Contact({name, number, deleteContact, id}) {
  return (
    <div className={styles.singleContact}>
      <div className={styles.contactData}>
        <p className={styles.contactName}>{name}</p>
        <p className={styles.contactNumber}>{number}</p>
      </div>
      <button className={styles.contactDeleteBtn} onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}

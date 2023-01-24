import React from 'react'
import Contact from "./Contact.jsx"


// let count = 0;
const Contacts = ({contacts}) => {
  for ( let each of contacts) {
    console.log(each)
  }
  return (
    <div>
      {contacts.map((contact) => (
       <Contact key={contact.contact_id} contact={contact}/>
     ))}
    </div>
    )
}

export default Contacts;

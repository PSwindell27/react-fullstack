import React from 'react'
import { contactState } from '../state.js';
import { useRecoilState } from 'recoil';


const Contact = ({contact}) => {
    const [contacts, setContacts] = useRecoilState(contactState);
   
  return (   
<div>
  {contact.first_name}, {contact.last_name} 
</div>
)
}

export default Contact;


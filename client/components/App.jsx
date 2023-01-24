import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { contactState } from '../state';
import Contacts from "./Contacts.jsx";


const App = () => {
    const [ contacts, setContacts ] = useRecoilState(contactState);

    useEffect(() => {
        fetch("http://localhost:3000/api/phone_contacts", {
          mode: "cors"
        })
        .then((res) => res.json())
        .then(data => {
          setContacts(data);
  

        });
      }, [])
  return (
    <div>
    <p>Hello</p>
     <Contacts contacts={contacts}/>
    </div>
  )
}

export default App

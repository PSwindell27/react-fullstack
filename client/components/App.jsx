import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import { useRecoilState } from "recoil";
import { contactState } from '../state';


const App = () => {
    const [contacts, setContacts] = useRecoilState(contactState)

    useEffect(() => {
        fetch("http://localhost:3000/api/phone_contacts", {
          
        })
        .then((res) => 
        res.json())
        .then((contacts) => {
          console.log(contacts)
            // setContacts(contacts);
        });
    }, []);
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}

export default App

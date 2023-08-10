import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContact } from '../redux/operations';

import { fetchContacts } from "../redux/operations"
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter';

export const App = () => {
 

/*  const filterState = useSelector(store => {
    return store.filtered;
  }); */
const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
  
  const contacts = useSelector(store => {
    return store.contacts.contacts.items;
  });
 
  
  
  const addNewContact = newContact => {
  const { name, number } = newContact;
  const contact = { name: name, phone: number };
  const toLowerCase = contacts.find(
  contact => contact.name.toLowerCase() === name.toLowerCase());
  
  if (toLowerCase) {
       alert(`${contact.name}: ${contact.number} is already in contacts`)
      return;
  } 
  
  dispatch(addContact(contact)); 

  }; 

   return(
     <div style={{
        margin: '0px auto' ,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        boxShadow: '0 0 10px #b4b3b3',
        backgroundColor: 'rgb(230, 231, 234)',
        width: '500px',
      }}>
       < PhoneBook message={"Phonebook"} />
       < ContactForm onSubmit={addNewContact} /> 
       < Filter  />
       < ContactsList />
      </div>
  
  )
} 
   
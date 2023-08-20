import React from "react";
import {selectUserContacts, selectContactsLoading, selectContactsError } from "../../redux/Contacts/contactsSelectors";
import { useSelector, useDispatch } from "react-redux";
import {selectAuthorization} from "../../redux/selectors";
import { useEffect } from "react";
import { requestContactsThunk, addContactThunk, deleteContactThunk } from "../../redux/Contacts/contactsOperations";

const Contacts = () => {
   const authorization = useSelector(selectAuthorization);
   const contacts = useSelector(selectUserContacts);
   const isLoading = useSelector(selectContactsLoading);
   const error = useSelector(selectContactsError);
   const dispatch = useDispatch();
   useEffect(() => {
      if (!authorization) return;
      dispatch(requestContactsThunk());
   }, [authorization, dispatch])
   const showContacts = Array.isArray(contacts) && contacts.length > 0 ;
   
   
const handleSubmit = event => {
    event.preventDefault();
   const form = event.currentTarget; 
   const name = form.elements.contactName.value;
   const number = form.elements.contactNumber.value;
   console.log(name, number)
    dispatch(addContactThunk({name, number }));
  };
   const handleDeleteContact = (contactId) => {
   dispatch(deleteContactThunk(contactId));
}
   
   return (
      <div> 


       <form  onSubmit={handleSubmit}>
        <label>
            <span>Name: </span>
        <input
            type="text"
            placeholder="Enter name of contact"
            name="contactName"
            pattern= "^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number: </span>
          <input
            type="text"
            placeholder= "Enter number of contact"
            name="contactNumber"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
         </label>
        <button  type="submit"> Add contact
        </button>
      </form>

         
           {isLoading && <loader />}
           {error && <p>Oops, some error occured... {error} </p>}
           <ul>
              {showContacts && contacts.map(contact => {
                 return (
                    <li key={contact.id}>
                       <h3>Name: {contact.name} </h3>
                       <p>Number: {contact.number} </p>
                       <button type="button"
                       aria-label="delete"   
               onClick={() => handleDeleteContact(contact.id)} 
          >
            <span>Delete</span>
            </button>
                    </li>
                 )
              } )}
           </ul>
       ContactPage 
    </div>       
      )}
export default Contacts;
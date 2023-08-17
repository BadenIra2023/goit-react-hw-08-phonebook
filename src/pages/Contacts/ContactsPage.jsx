import React from "react";
import {selectUserContacts, selectContactsLoading, selectContactsError } from "../../redux/Contacts/contactsSelectors";
import { useSelector, useDispatch } from "react-redux";
import {selectAuthorization} from "../../redux/selectors";
import { useEffect } from "react";
import { requestContactsThunk } from "../../redux/Contacts/contactsOperations";

const ContactPage = () => {
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
     return (
        <div> 
           {isLoading && <loader />}
           {error && <p>Oops, some error occured... {error} </p>}
           <ul>
              {showContacts && contacts.map(contact => {
                 return (
                    <li key={contact.id}>
                       <h3>Name: {contact.name} </h3>
                       <p>Mumber: {contact.number} </p>
                    </li>
                 )
              } )}
           </ul>
       ContactPage 
    </div>       
      )}
export default ContactPage;
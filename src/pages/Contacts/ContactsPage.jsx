import React from "react";
import {selectUserContacts, selectContactsLoading} from "../../redux/Contacts/contactsSelectors";
import { useSelector, useDispatch } from "react-redux";
import {selectAuthorization} from "../../redux/selectors";
import { useEffect } from "react";
import { requestContactsThunk, addContactThunk, deleteContactThunk } from "../../redux/Contacts/contactsOperations";
import {Filter} from "../../components/Filter/Filter"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';


const Contacts = () => {
  const filter = useSelector(store => {
    return store.filter.filter;
  }); 
   const authorization = useSelector(selectAuthorization);
   const contacts = useSelector(selectUserContacts);
   const isLoading = useSelector(selectContactsLoading);
  const dispatch = useDispatch();
  console.log(filter)
   useEffect(() => {
      if (!authorization) return;
      dispatch(requestContactsThunk());
   }, [authorization, dispatch])
   const showContacts = Array.isArray(contacts) && contacts.length > 0 ;
   
   
const handleSubmit = e => {
    e.preventDefault();
   const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
   console.log(name, number)
   const newContact = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (newContact) {
      alert(`${name} is already in contacts!`);
      return;
    }
   dispatch(addContactThunk({ name, number }));
   e.target.reset();
  };
   const handleDeleteContact = (contactId) => {
   dispatch(deleteContactThunk(contactId));
}
  
   return (
<Box
      sx={{
        width: '600px',
        marginTop: 8,
        border: '2px solid #4a148c',
        borderRadius: '8px',
        marginLeft: 'auto',
        marginRight: 'auto',
        bgcolor: '#fff',
      }}
    >
      <Avatar
        sx={{
          m: 2,
          marginLeft: 'auto',
          marginRight: 'auto',
          bgcolor: 'secondary.main',
        }}
      >
        <ContactPhoneIcon />
      </Avatar>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          type="text"
          name="name"
          size="small"
          id="outlined-basic"
          label="Name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters. For example Adrian, Jacob Mercer."
          required
          variant="outlined"
          sx={{
            background: 'white',
            borderRadius: '8px',
            marginTop: '5px',
          }}
        />
        <TextField
          type="tel"
          name="number"
          size="small"
          id="outlined-basic"
          label="Number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces"
          required
          variant="outlined"
          sx={{
            background: 'white',
            borderRadius: '8px',
            marginTop: '10px',
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            background: '#5275e9',
          }}
        >
          Add contact
            </Button>
         {<Filter />} 
      
         </Box>
        
          {isLoading && <loader />}
            
            <List sx={{ maxWidth: '350px', marginLeft: 'auto', marginRight: 'auto' }}>
              {showContacts && contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map(contact => {
                 return (
          <ListItem key={contact.id}>
           
            <ListItemText primary={contact.name} secondary={contact.number} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteContact(contact.id)}
            >
              <DeleteIcon />
            </IconButton>
                    </ListItem>    );
      })}
                   </List>
    </Box>  )              
      }
export default Contacts;
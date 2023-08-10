import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./operations"

const initialState = {
  contacts: {
  items: [],
  isLoading: false,
  error: null
  },
};

const contactsSlice = createSlice({
  
  name: 'contacts',
  initialState: initialState,

 extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
   },
   [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload);
     state.contacts.isLoading = true;
    
   },
    [deleteContact.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
   },
 }
})
/*  reducers: {
    
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    
    deleteContact(state, { payload }) {
     
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; */

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;

import { createSlice } from "@reduxjs/toolkit";
import {requestContactsThunk, addContactThunk, deleteContactThunk} from "../Contacts/contactsOperations"

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
  
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,

    extraReducers: {[requestContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;

    },
    [requestContactsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
     
     },
    [requestContactsThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContactThunk.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
    },
    [addContactThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      },
    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContactThunk.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
      state.isLoading = false;
    },
    [deleteContactThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    
    }
    
})

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;

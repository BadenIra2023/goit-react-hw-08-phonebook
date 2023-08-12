import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./authOperations"

const initialState = {
  user: {
    name: "",
    email: ""
  },
  token: null,
  isLoading: false,
  error: null,
  userData: null,
  authorization: false,
};

const authSlice = createSlice({
  
  name: 'auth',
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

const { reducer: authReducer } = authSlice;
export default authReducer;


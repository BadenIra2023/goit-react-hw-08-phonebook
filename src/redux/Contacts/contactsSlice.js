import { createSlice } from "@reduxjs/toolkit";
import {requestContactsThunk} from "../Contacts/contactsOperations"

const initialState = {
  cotacts: null,
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
    },}
})

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;

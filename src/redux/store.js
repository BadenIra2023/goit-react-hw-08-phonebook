import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import filterReducer from "./filterSlice"; 
import contactsReducers from "../redux/Contacts/contactsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    contacts: contactsReducers,
  },
});
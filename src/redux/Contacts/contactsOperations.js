
import { createAsyncThunk } from "@reduxjs/toolkit";
import {$instanse } from "../authOperations";

export const requestContactsThunk = createAsyncThunk("contacts/getAll",
    async (_, thunkAPI) => { 
    try { const responce = await $instanse.get("/contacts");
      
      console.log(responce.data)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    });

export const addContactThunk = createAsyncThunk("contacts/addContact",
  async ({ name, number }, thunkAPI) => { 
    try {
      const responce = await $instanse.post("/contacts",{ name, number});
      
      console.log(responce)
      console.log(responce.data)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
    
  export const deleteContactThunk = createAsyncThunk("contacts/deleteContact",
  async (contactId, thunkAPI) => { 
    try {
      const responce = await $instanse.delete(`/contacts/${contactId}`);
      console.log(responce)
      console.log(responce.data)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    });
  

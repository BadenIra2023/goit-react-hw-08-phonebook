import axios from "axios";
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

export const addContactsThunk = createAsyncThunk("contacts/addContact",
  async (contactData, thunkAPI) => { 
    try { const responce = await $instanse.post("/contacts");
      console.log(responce.data)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    });
  

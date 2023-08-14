import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const $instanse = axios.create({baseURL: "https://connections-api.herokuapp.com"})
export const setToken = token => { $instanse.defaults.headers["Authorization"] = `Bearer ${token}`};
export const clearToken = () => { $instanse.defaults.headers["Authorization"] = "" };

export const registerUserThunk = createAsyncThunk("auth/register",
  async (userData, thunkAPI) => { 
    try { const responce = await $instanse.post("/users/signup", userData);
      console.log(responce.data)
      setToken(responce.data.token)
      console.log(responce.data.token)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });


export const loginUserThunk = createAsyncThunk("auth/login",
  async (userData, thunkAPI) => { 
    try { const responce = await $instanse.post("/users/login", userData);
      console.log(responce.data)
      setToken(responce.data.token)
      console.log(responce.data.token)
      return responce.data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });







export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 

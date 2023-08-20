import { createSlice } from "@reduxjs/toolkit";
import {registerUserThunk, loginUserThunk, refreshUserThunk, logoutUserThunk, addContact, deleteContact} from "./authOperations"

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
   [registerUserThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;

    },
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authorization = true;
      state.userData = payload.user;
      state.token = payload.token;
     },
    [registerUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [ loginUserThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;

    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authorization = true;
      state.userData = payload.user;
      state.token = payload.token;
     },
    [loginUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    


    [ refreshUserThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;

    },
    [refreshUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authorization = true;
      state.userData = payload;
     },
    [refreshUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
   

     [ logoutUserThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;

    },
    [logoutUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.authorization = false;
      state.userData = null;
      state.token = null;
     },
    [logoutUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
 } 
}) 

const { reducer: authReducer } = authSlice;
export default authReducer;


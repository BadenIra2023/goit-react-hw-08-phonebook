import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginUserThunk} from "../../redux/authOperations"
import css from "../RegisterForm/RegisterForm.module.css"


export const LoginForm = () => { 
const dispatch = useDispatch();
const handleSubmit = e => {
  e.preventDefault();
    console.log(e.target)
  const form = e.currentTarget;
  const email = form.elements.userEmail.value
  const password = form.elements.userPassword.value
  const finallUserData = {
       email, password
  }
  console.log(finallUserData)
 dispatch(loginUserThunk(finallUserData));
    form.reset();
  };
     return (
    <div> 
        <h1>Login Into Your Account</h1>
 <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      
      <label className={css.label}>
        Email
        <input type="email" name="userEmail"  required/>
           </label>
        <label className={css.label}>
        Password
        <input type="password" name="userPassword" required minLength={7}/>
      </label>
      <button type="submit">Sing In</button>
    </form>
    </div>       
      )}
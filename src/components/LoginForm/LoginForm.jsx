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
    const name = form.elements.userName.value
  const email = form.elements.userEmail.value
  const finallUserData = {
      name, email
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
        Username
        <input type="text" name="userName" required minLength={2}/>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="userEmail"  required/>
      </label>
      <button type="submit">Sing In</button>
    </form>
    </div>       
      )}
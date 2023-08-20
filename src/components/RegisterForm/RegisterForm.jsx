
import { useDispatch } from 'react-redux';
import {registerUserThunk} from "../../redux/authOperations"
import css from "../RegisterForm/RegisterForm.module.css"


export const RegisterForm = () => { 
const dispatch = useDispatch();
const handleSubmit = e => {
  e.preventDefault();
  console.log(e.target)
    const form = e.currentTarget;
    const name = form.elements.userName.value
  const email = form.elements.userEmail.value
   const password = form.elements.userPassword.value
  const finallUserData = {
      name, email, password
  }
  console.log(finallUserData)
  dispatch(registerUserThunk(finallUserData));
    form.reset();
  };
     return (
    <div> 
        <h1>Страница регистрации</h1>
 <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="userName" required minLength={2}/>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="userEmail"  required/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="userPassword" required minLength={7}/>
      </label>
      <button type="submit">Register</button>
    </form>
    </div>       
      )}
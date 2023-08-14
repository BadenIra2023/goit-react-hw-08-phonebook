import css from "./App.module.css"

import {refreshUserThunk, logoutUserThunk} from "./redux/authOperations"
import {selectToken, selectAuthorization} from "./redux/selectors"
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const HomePage = lazy(()=>import("./pages/Home/HomePage"));
const RegisterPage = lazy(()=>import("./pages/Register/RegisterPage"));
const LoginPage = lazy(()=>import("./pages/Login/LoginPage"));
const ContactsPage = lazy(()=>import("./pages/Contacts/ContactsPage"));

export  const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authorization = useSelector(selectAuthorization);

  useEffect(() => {
if(!token) return;
dispatch(refreshUserThunk());
  }, [token, dispatch])
  const handlLogOut = () => {
    dispatch(logoutUserThunk());
  }

  return (
     <div  >
      <header className={css.header}>
        <nav>
          <NavLink className={css.link} to={"/"}>Home</NavLink>
          {authorization ? <><NavLink className={css.link} to={"/contacts"}>Contacts</NavLink>
            <button onClick={handlLogOut}>Log out</button></> : 
          <><NavLink className={css.link} to={"/register"}>Register</NavLink>
          <NavLink className={css.link} to={"/login"}>Login</NavLink></>} 
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} /> 
         </Routes>
        </Suspense>
      </main>
   
      </div>
  
  )
} 

/* стиль був на головному дів
style={{ 
        margin: '0px auto' ,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        boxShadow: '0 0 10px #b4b3b3',
        backgroundColor: 'rgb(230, 231, 234)',
        width: '500px',
      }} */
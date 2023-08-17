import React from "react";
import { useSelector } from "react-redux";
import {selectAuthorization} from "../../redux/selectors";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const authorization = useSelector(selectAuthorization);
   const navigate = useNavigate();
   if(authorization) return navigate("/contacts");
     return (
    <div> 
       <LoginForm/>;
    </div>       
      )}
export default  LoginPage;
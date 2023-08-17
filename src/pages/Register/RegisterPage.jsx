import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import { selectAuthorization } from "../../redux/selectors"
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const authorization = useSelector(selectAuthorization);
  const navigate = useNavigate();
  if(authorization) return navigate("/contacts");
  return <> <RegisterForm/></>;
};

export default RegisterPage;
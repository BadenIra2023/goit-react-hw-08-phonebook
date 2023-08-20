import React from "react";
import { useSelector } from "react-redux";
import { selectAuthorization } from "../../redux/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children, redirectTo = "/"}) => {
const authorization = useSelector(selectAuthorization);

return authorization ? children : <Navigate to={redirectTo}/>;  
}

export default PrivateRoute;

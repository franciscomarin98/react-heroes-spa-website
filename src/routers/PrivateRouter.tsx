import React, {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../auth/authContext";

interface PrivateRouterProps {
    children: React.ReactElement
}

const PrivateRouter = ({children}: PrivateRouterProps) => {
    const context = useContext(AuthContext);

    const {pathname, search} = useLocation();
    localStorage.setItem("lastPath", pathname + search);

    return context.user.loggedIn ? children : <Navigate to={'/login'}/>
};

export default PrivateRouter;

import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../auth/authContext";

interface PublicRouterProps {
    children: React.ReactElement
}

const PublicRouter = ({children}: PublicRouterProps) => {
    const context = useContext(AuthContext);
    return context.user.loggedIn ? <Navigate to={'/marvel-heroes'}/> : children
};

export default PublicRouter;

import {useNavigate} from "react-router-dom";
import {AuthContext} from "../auth/authContext";
import {useContext} from "react";

export const LoginPage = () => {
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleLogin = () => {

        // @ts-ignore
        context.dispatch({type: 'LOGIN', payload: {name: 'Francisco'}});
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {replace: true});
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};


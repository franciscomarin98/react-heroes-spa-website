import React, {useContext} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from "../auth/authContext";

export const Navbar = () => {

    const navigate = useNavigate();
    const context = useContext(AuthContext);

    const handleLogout = () => {
        // @ts-ignore
        context.dispatch({type: 'LOGOUT'});
        navigate('/login', {replace: true});
    }

    return (
        <nav className="container-fluid navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel-heroes"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc-heroes"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/search-heroe"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {context.user.name}
                    </span>
                    <button onClick={handleLogout} className="btn nav-item nav-link">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

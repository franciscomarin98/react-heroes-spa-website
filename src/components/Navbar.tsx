import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {

    const handleLogout = () => {
        console.log('TODO: handle')
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Francisco Marín
                    </span>
                    <button onClick={handleLogout} className="btn nav-item nav-link">
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

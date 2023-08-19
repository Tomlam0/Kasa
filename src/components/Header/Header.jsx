import React from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/img/logo.png";

const Header = () => {
    return (
        <div id="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo kasa" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

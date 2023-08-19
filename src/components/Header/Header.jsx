import React from "react";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div className="logo">
                <Link to="/">
                    <img
                        src={require("../../assets/img/logo.png")}
                        alt="logo kasa"
                    />
                </Link>
            </div>

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

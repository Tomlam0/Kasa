import React from "react";

import logo from "../../assets/img/logo-nb.svg";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="logo-block">
                <img src={logo} alt="logo kasa" className="logo"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

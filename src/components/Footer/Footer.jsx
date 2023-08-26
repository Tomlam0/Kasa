import React from "react";

import logo from "../../assets/img/Logo/logo-nb.svg";

import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contentWrapper}>
                <img src={logo} alt="logo kasa" className={styles.logo}></img>
                <p className={styles.text}>© 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

import chevron from "../../assets/img/Icons/chevronUp.svg";

import styles from "./slideshow.module.scss";

const Slideshow = () => {
    return (
        <div className={styles.container}>
            <img src="" alt="" className={styles.picture} />
            <div className={styles.chevrons}>
                <img
                    src={chevron}
                    alt="Icone chevron"
                    className={styles.chevronLeft}
                />
                <img
                    src={chevron}
                    alt="Icone chevron"
                    className={styles.chevronRight}
                />
            </div>
            <p className={styles.count}>1/4</p>
        </div>
    );
};

export default Slideshow;

import React from "react";

import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";

import styles from "./housing.module.scss";

const Housing = () => {
    return (
        <>
            <section className={styles.container}>
                <Slideshow />
                <div className={styles.collapse}>
                    <Collapse />
                </div>
            </section>
        </>
    );
};

export default Housing;

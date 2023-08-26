import React from "react";

import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import bannerAbout from "../../assets/img/Banner/banner-about.webp";

import styles from "./about.module.scss";

const About = () => {
    return (
        <>
            <section className={styles.banner}>
                <Banner image={bannerAbout} text="" />
            </section>
            <section className={styles.collapse}>
                <Collapse />
            </section>
        </>
    );
};

export default About;

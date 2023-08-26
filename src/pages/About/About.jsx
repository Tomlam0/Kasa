import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import bannerAbout from "../../assets/img/Banner/banner-about.webp";

import styles from "./about.module.scss";

const About = () => {
    return (
        <Layout>
            <section className={styles.banner}>
                <Banner image={bannerAbout} text="" />
            </section>
            <Collapse />
        </Layout>
    );
};

export default About;

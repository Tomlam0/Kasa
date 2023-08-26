import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

import bannerHome from "../../assets/img/Banner/banner-home.webp";

import styles from "./home.module.scss";

const Home = () => {
    return (
        <Layout>
            <section className={styles.banner}>
                <Banner
                    image={bannerHome}
                    text={`Chez vous,
                    partout et ailleurs`}
                />
            </section>
            <Card />
        </Layout>
    );
};

export default Home;

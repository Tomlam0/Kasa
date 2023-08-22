import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Card />
            </main>
            <Footer />
        </>
    );
};

export default Home;

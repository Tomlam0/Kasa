import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Collapse />
            </main>
            <Footer />
        </>
    );
};

export default About;

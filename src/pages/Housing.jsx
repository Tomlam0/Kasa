import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slideshow from "../components/Slideshow/Slideshow";

const Housing = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Slideshow />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Housing;

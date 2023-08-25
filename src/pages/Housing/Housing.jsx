import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";

const Housing = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Slideshow />
                    <Collapse />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Housing;

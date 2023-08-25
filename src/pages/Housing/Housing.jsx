import React from "react";

import Layout from "../../components/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";

const Housing = () => {
    return (
        <Layout>
            <section className="housing-container">
                <Slideshow />
                <Collapse />
            </section>
        </Layout>
    );
};

export default Housing;

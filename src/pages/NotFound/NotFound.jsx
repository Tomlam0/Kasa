import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Error404 from "../../components/Error404/Error404";

const NotFound = () => {
    return (
        <>
            <Header />
            <main>
                <Error404 />
            </main>
            <Footer />
        </>
    );
};

export default NotFound;

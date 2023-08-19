import React from "react";

import bannerHome from "../../assets/img/banner-home.webp";

const Banner = () => {
    const text = "Chez vous,\n partout et ailleurs";

    return (
        <section id="banner">
            <img src={bannerHome} alt="bannière accueil" />
            <p>{text}</p>
        </section>
    );
};

export default Banner;

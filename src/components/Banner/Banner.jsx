import React from "react";

import { useLocation } from "react-router-dom";

import bannerHome from "../../assets/img/banner-home.webp";
import bannerAbout from "../../assets/img/banner-about.webp";

const Banner = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    let text = ""; // Définit vide pour qu'il soit déclaré uniquement dans Home par la suite
    let bannerImage = null;

    // Condition pour savoir quelle banière afficher en fonction de la route
    if (currentPath === "/") {
        bannerImage = bannerHome;
        text = "Chez vous,\n partout et ailleurs";
    } else if (currentPath === "/about") {
        bannerImage = bannerAbout;
    } else {
        bannerImage = bannerHome;
    }

    return (
        <section id="banner">
            <img
                src={bannerImage}
                alt="bannière accueil paysage"
                className={currentPath === "/about" ? "about-banner" : ""} // Ajoute une class uniquement pour la banner du path about
            />
            <h1>{text}</h1>
        </section>
    );
};

export default Banner;

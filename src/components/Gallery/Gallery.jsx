import React from "react";

import Card from "../Card/Card";

import locationData from "../../assets/data/logements.json";

import styles from "./gallery.module.scss";

const Gallery = () => {
    return (
        <div className={styles.container}>
            {locationData.map((location) => (
                <Card key={location.id} location={location} />
            ))}
        </div>
    );
};

export default Gallery;

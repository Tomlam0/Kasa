import React from "react";

import { useParams } from "react-router-dom";

import locationData from "../../assets/data/logements.json";

import Slideshow from "../Slideshow/Slideshow";
import Collapse from "../Collapse/Collapse";

import styles from "./housingDisplay.module.scss";

const HousingDisplay = () => {
    // Pour trouver l'id du logement en question
    // useParams retourne un objet contenant les paramètres de l'URL actuelle
    const { id } = useParams();
    const data = locationData.find((location) => location.id === id);

    return (
        <>
            <Slideshow />
            <div className={styles.collapse}>
                <Collapse title={"Description"} text={data.description} />
                <Collapse
                    title={"Équipements"}
                    text={
                        <ul>
                            {data.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </>
    );
};

export default HousingDisplay;

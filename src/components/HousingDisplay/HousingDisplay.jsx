import React from "react";
// import { useParams } from "react-router-dom";

import locationData from "../../assets/data/logements.json";

import Slideshow from "../Slideshow/Slideshow";
import Collapse from "../Collapse/Collapse";

import styles from "./housingDisplay.module.scss";

const HousingDisplay = () => {
    //mise a 0 pour le moment pour les tests
    const data = locationData[0];
    // Pour trouver l'id du logement en question
    // const { id } = useParams();

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

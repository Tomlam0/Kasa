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

    // On va séparer les strings en tableau après chaque points de la description du Collapse
    const descriptions = data.description
        .split(".")
        .filter((sentence) => sentence.trim() !== "");

    return (
        <>
            <Slideshow />

            <div className={styles.collapse}>
                <Collapse
                    title={"Description"}
                    // on map le tableau descriptions pour rendre des span après chaque points pour revenir à la ligne
                    text={descriptions.map((sentence, index) => (
                        <React.Fragment key={index}>
                            <h3>{sentence.trim()}.</h3>
                        </React.Fragment>
                    ))}
                />

                <Collapse
                    title={"Équipements"}
                    // On encpasule dans un système de listes pour rendre l'affichage plus clair
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

import React from "react";

import { useParams } from "react-router-dom";

import locationData from "../../assets/data/logements.json";

import Slideshow from "../Slideshow/Slideshow";
import Tag from "../Tag/Tag";
import Collapse from "../Collapse/Collapse";

import styles from "./housingDisplay.module.scss";

const HousingDisplay = () => {
    // Pour trouver l'id du logement en question
    // useParams retourne un objet contenant les paramètres de l'URL actuelle
    const { id } = useParams();
    const data = locationData.find((location) => location.id === id);

    // Bloc pour retourner à la ligne après chaque "." dans la description du collapse
    const descriptions = data.description
        .split(".")
        .filter((sentence) => sentence.trim() !== "");

    return (
        <>
            <Slideshow image={data.pictures} title={data.title} />

            <h2 className={styles.title}>{data.title}</h2>

            <h3 className={styles.location}>{data.location}</h3>

            <div className={styles.tags}>
                {data.tags.map((tag, index) => (
                    <Tag key={index} title={tag} />
                ))}
            </div>

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

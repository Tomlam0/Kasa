import React, { useState } from "react";

import collapseData from "../../assets/data/collapse.json";

import chevron from "../../assets/img/Icons/chevronUp.svg";

import styles from "./collapse.module.scss";

const Collapse = () => {
    // Création d'un tableau d'états pour suivre l'état de chaque collapse individuellement
    // On map les données du JSON et on le déclare en false car de base il est fermé
    const [isOpen, setIsOpen] = useState(collapseData.map(() => false));

    // Lors du clic sur un chevron, ajuste l'état de l'élément collapse correspondant
    // index est natif a la fonction map précédante
    const toggleCollapse = (index) => {
        const newIsOpen = [...isOpen];
        // si la valeur était a false elle passe a true
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <>
            {collapseData.map((data, index) => (
                <div className={styles.collapse} key={data.id}>
                    <div className={styles.blockTitle}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <img
                            onClick={() => toggleCollapse(index)}
                            src={chevron}
                            alt="Icone chevron"
                            className={
                                isOpen[index]
                                    ? `${styles.chevron} ${styles.rotated}`
                                    : styles.chevron
                            }
                        />
                    </div>
                    <div
                        className={
                            isOpen[index]
                                ? `${styles.blockText} ${styles.open}`
                                : styles.blockText
                        }
                    >
                        <h3
                            className={
                                isOpen[index]
                                    ? `${styles.text} ${styles.open}`
                                    : styles.text
                            }
                        >
                            {data.content}
                        </h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Collapse;
